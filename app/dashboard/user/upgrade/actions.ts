'use server'

import { redirect } from 'next/navigation';
import stripe from '@/lib/stripe/stripe';
import { headers } from 'next/headers';

export async function getStripeProducts() {
  const products = await stripe.products.list({
    expand: ['data.default_price']
  });

  return products.data.map(product => ({
    id: product.id,
    name: product.name,
    description: product.description,
    price: (product.default_price as any)?.unit_amount / 100,
    priceId: (product.default_price as any)?.id,
  }));
}

export async function createCheckoutSession(priceId: string) {
  if (!priceId) {
    throw new Error('Price ID is not set');
  }

  const headersList = headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const baseUrl = `${protocol}://${host}`;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: 'subscription',
    success_url: `${baseUrl}/dashboard/user/upgrade/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/dashboard/user/upgrade`,
  });

  if (!session.url) {
    throw new Error('Failed to create checkout session');
  }

  redirect(session.url);
}


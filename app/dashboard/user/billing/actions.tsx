'use server'

import stripe from '@/lib/stripe/stripe'

export async function getBillingHistory() {
  try {
    // Fetch the most recent 100 charges instead of invoices
    const charges = await stripe.charges.list({
      limit: 100,
    });

    return charges.data.map(charge => ({
      id: charge.id,
      date: new Date(charge.created * 1000).toLocaleDateString(),
      amount: (charge.amount / 100).toFixed(2),
      status: charge.status,
      receipt_url: charge.receipt_url,
    }));
  } catch (error) {
    console.error('Error fetching billing history:', error);
    return [];
  }
}


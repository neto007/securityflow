import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from 'lucide-react'
import { getStripeProducts, createCheckoutSession } from './actions'

export default async function UpgradeToProPage() {
  type Product = {
    id: string;
    name: string;
    description: string | null;
    price: number;
    priceId: any;
    features?: string[];
  };

  const products: Product[] = await getStripeProducts();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Upgrade Your Plan</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-3xl font-bold mb-4">${product.price}/month</p>
              <ul className="space-y-2">
                {product?.features?.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <form action={createCheckoutSession.bind(null, product.priceId)} className="w-full">
                <Button className="w-full" size="lg" type="submit">
                  Upgrade to {product.name}
                </Button>
              </form>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}


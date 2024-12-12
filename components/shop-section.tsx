import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LeafyGreen, Sprout, DogIcon as DogBowl, ShoppingCart } from 'lucide-react'

const products = [
  { icon: LeafyGreen, title: "Indoor Plants", description: "Lush greenery for your home." },
  { icon: Sprout, title: "Outdoor Plants", description: "Beautiful additions to your garden." },
  { icon: DogBowl, title: "Pet Food", description: "Nutritious meals for your furry friends." },
  { icon: ShoppingCart, title: "Pet Supplies", description: "Everything your pet needs." },
]

export function ShopSection() {
  return (
    <section id="shop" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Shop</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <Card key={index}>
              <CardHeader>
                <product.icon className="h-10 w-10 mb-2" />
                <CardTitle>{product.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {product.description}
                </p>
                <Button variant="outline" className="w-full">Shop Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


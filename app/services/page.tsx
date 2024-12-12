import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

// This would typically come from a database
const services = [
  { id: 1, title: 'Dog Walking', category: 'Pet Care', price: 20 },
  { id: 2, title: 'Lawn Mowing', category: 'Landscaping', price: 50 },
  { id: 3, title: 'Cat Sitting', category: 'Pet Care', price: 30 },
  { id: 4, title: 'Garden Design', category: 'Landscaping', price: 100 },
]

export default function ServicesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Available Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{service.category}</p>
              <p className="text-lg font-bold mt-2">${service.price}</p>
              <Link href={`/services/${service.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
                View Details
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}


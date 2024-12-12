import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'

// This would typically come from a database
const services = [
  { id: 1, title: 'Dog Walking', category: 'Pet Care', price: 20, description: 'Professional dog walking service' },
  { id: 2, title: 'Lawn Mowing', category: 'Landscaping', price: 50, description: 'Expert lawn mowing and trimming' },
]

export default function ServicePage({ params }: { params: { id: string } }) {
  const service = services.find(s => s.id === parseInt(params.id))

  if (!service) {
    notFound()
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <p className="text-gray-600 mb-2">{service.category}</p>
      <p className="text-2xl font-bold mb-4">${service.price}</p>
      <p className="mb-6">{service.description}</p>
      <Button>Book Now</Button>
    </div>
  )
}


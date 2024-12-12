import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PawPrintIcon, Sprout, Scissors } from 'lucide-react'

const services = [
  { icon: PawPrintIcon, title: "Pet Care", description: "Professional pet sitting, dog walking, and grooming services." },
  { icon: Sprout, title: "Landscaping", description: "Expert lawn care, garden design, and maintenance services." },
  { icon: Scissors, title: "Grooming", description: "Top-notch grooming services for your furry friends." },
]

export function ServicesSection() {
  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="h-10 w-10 mb-2" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


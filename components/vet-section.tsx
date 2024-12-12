import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Stethoscope, PawPrintIcon, Search } from 'lucide-react'

const vetServices = [
  { icon: Stethoscope, title: "Clinic Appointments", description: "Book appointments at our partner veterinary clinics.", action: "Find Clinics" },
  { icon: PawPrintIcon, title: "Freelance Vets", description: "Connect with independent veterinarians for house calls.", action: "Find Vets" },
  { icon: Search, title: "Specialty Care", description: "Find specialists for specific pet health needs.", action: "Search Specialists" },
]

export function VetSection() {
  return (
    <section id="vet" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Veterinary Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vetServices.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <service.icon className="h-10 w-10 mb-2" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <Button className="w-full">{service.action}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


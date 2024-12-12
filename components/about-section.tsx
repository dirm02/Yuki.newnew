import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Yuki</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            We're passionate about creating a one-stop destination for all your pet and plant needs. Our mission is to connect pet owners and plant enthusiasts with quality products, trusted services, and expert care through Yuki.
          </p>
          <Button size="lg">Learn More About Us</Button>
        </div>
      </div>
    </section>
  )
}


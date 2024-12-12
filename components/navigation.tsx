import Link from 'next/link'
import { PawPrintIcon, Sprout } from 'lucide-react'

export function Navigation() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-2">
            <PawPrintIcon className="h-6 w-6" />
            <Sprout className="h-6 w-6" />
            <span className="text-xl font-bold">Yuki</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link className="text-sm font-medium hover:text-primary" href="#services">Services</Link>
            <Link className="text-sm font-medium hover:text-primary" href="#shop">Shop</Link>
            <Link className="text-sm font-medium hover:text-primary" href="#vet">Veterinarian</Link>
            <Link className="text-sm font-medium hover:text-primary" href="#about">About</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}


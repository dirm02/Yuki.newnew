import Link from 'next/link'

export function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-gray-800">Yuki</Link>
          <div className="space-x-4">
            <Link href="/services" className="text-gray-600 hover:text-gray-800">Services</Link>
            <Link href="/profile" className="text-gray-600 hover:text-gray-800">Profile</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}


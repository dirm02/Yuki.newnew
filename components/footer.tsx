import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} Yuki. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" href="#">
              Privacy Policy
            </Link>
            <Link className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300" href="#">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}


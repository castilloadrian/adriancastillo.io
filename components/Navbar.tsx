import Link from 'next/link'
import { ThemeToggle } from './theme-toggle'

const Navbar = () => {
  return (
    <header className="max-w-2xl mx-auto px-4 py-8 flex justify-between items-center">
      <span className="text-sm">adriancastillo.sh</span>
      <ThemeToggle />
      <Link href="/reading-list" className="text-sm hover:underline">
        reading list
      </Link>
    </header>
  )
}

export default Navbar

import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-secondary py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-primary text-2xl font-bold">Logopify</div>
        <ul className="hidden md:flex space-x-6">
          <li><Link href="#home" className="hover:text-primary">Home</Link></li>
          <li><Link href="#about" className="hover:text-primary">About</Link></li>
          <li><Link href="#services" className="hover:text-primary">Services</Link></li>
          <li><Link href="#projects" className="hover:text-primary">Projects</Link></li>
          <li><Link href="#blog" className="hover:text-primary">Blog</Link></li>
        </ul>
        <button className="bg-primary text-secondary px-4 py-2 rounded hover:bg-opacity-80">Get Started</button>
      </nav>
    </header>
  )
}
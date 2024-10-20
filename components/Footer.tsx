import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-primary text-2xl font-bold mb-4">Logopify</div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="#home" className="hover:text-primary">Home</Link></li>
              <li><Link href="#about" className="hover:text-primary">About</Link></li>
              <li><Link href="#services" className="hover:text-primary">Services</Link></li>
              <li><Link href="#projects" className="hover:text-primary">Projects</Link></li>
              <li><Link href="#blog" className="hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p>Email: info@logopify.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-accent hover:bg-primary text-white hover:text-secondary w-10 h-10 rounded-full flex items-center justify-center transition duration-300">FB</a>
              <a href="#" className="bg-accent hover:bg-primary text-white hover:text-secondary w-10 h-10 rounded-full flex items-center justify-center transition duration-300">TW</a>
              <a href="#" className="bg-accent hover:bg-primary text-white hover:text-secondary w-10 h-10 rounded-full flex items-center justify-center transition duration-300">IG</a>
              <a href="#" className="bg-accent hover:bg-primary text-white hover:text-secondary w-10 h-10 rounded-full flex items-center justify-center transition duration-300">LI</a>
            </div>
          </div>
        </div>
        <div className="border-t border-accent mt-8 pt-8 text-center">
          <p>&copy; 2023 Logopify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
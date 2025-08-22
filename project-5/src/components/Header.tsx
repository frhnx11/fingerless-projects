import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-primary text-white">
      <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">E-commerce Store</Link>
        <ul className="flex space-x-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/cart">Cart</Link></li>
          <li><Link href="/orders">Orders</Link></li>
        </ul>
      </nav>
    </header>
  )
}

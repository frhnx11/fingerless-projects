import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Cart() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    // Fetch cart items from local storage or API
    const items = JSON.parse(localStorage.getItem('cartItems') || '[]')
    setCartItems(items)
  }, [])

  const total = cartItems.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item: any) => (
              <li key={item.id} className="py-4 flex">
                <img src={item.image} alt={item.name} className="h-16 w-16 object-cover mr-4" />
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)} x {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <p className="text-xl font-semibold">Total: ${total.toFixed(2)}</p>
            <Link href="/checkout" className="mt-4 bg-primary text-white px-6 py-2 rounded inline-block">
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

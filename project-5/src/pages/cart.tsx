import Head from 'next/head'
import Cart from '@/components/Cart'

export default function CartPage() {
  return (
    <>
      <Head>
        <title>Shopping Cart</title>
        <meta name="description" content="Your shopping cart" />
      </Head>
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Your Shopping Cart</h1>
        <Cart />
      </main>
    </>
  )
}

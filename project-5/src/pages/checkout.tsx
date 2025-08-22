import Head from 'next/head'
import Checkout from '@/components/Checkout'

export default function CheckoutPage() {
  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta name="description" content="Secure checkout" />
      </Head>
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Checkout</h1>
        <Checkout />
      </main>
    </>
  )
}

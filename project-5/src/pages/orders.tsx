import Head from 'next/head'
import OrderList from '@/components/OrderList'

export default function OrdersPage() {
  return (
    <>
      <Head>
        <title>Your Orders</title>
        <meta name="description" content="Manage your orders" />
      </Head>
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Your Orders</h1>
        <OrderList />
      </main>
    </>
  )
}

import Head from 'next/head'
import ProductList from '@/components/ProductList'

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerce Store</title>
        <meta name="description" content="Welcome to our e-commerce store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold my-8">Welcome to our Store</h1>
        <ProductList />
      </main>
    </>
  )
}

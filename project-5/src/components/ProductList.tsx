import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      // Replace with your actual API endpoint
      const response = await axios.get('/api/products')
      setProducts(response.data)
    }
    fetchProducts()
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product: any) => (
        <div key={product.id} className="border rounded-lg p-4">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-600">${product.price.toFixed(2)}</p>
          <button className="mt-4 bg-primary text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
      ))}
    </div>
  )
}

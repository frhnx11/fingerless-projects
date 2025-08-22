import { useState, useEffect } from 'react'
import axios from 'axios'

export default function OrderList() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    const fetchOrders = async () => {
      // Replace with your actual API endpoint
      const response = await axios.get('/api/orders')
      setOrders(response.data)
    }
    fetchOrders()
  }, [])

  return (
    <div>
      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <ul className="divide-y divide-gray-200">
          {orders.map((order: any) => (
            <li key={order.id} className="py-4">
              <h3 className="text-lg font-semibold">Order #{order.id}</h3>
              <p className="text-gray-600">Date: {new Date(order.date).toLocaleDateString()}</p>
              <p className="text-gray-600">Total: ${order.total.toFixed(2)}</p>
              <p className="text-gray-600">Status: {order.status}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

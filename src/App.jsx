import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomePage } from './pages/HomePage'
import { Product } from './pages/Product'

function App() {
  const [productData, setProductData] = useState([
    { title: "Iphone 6", price: 32000 },
    { title: "Iphone 7", price: 38000 },
    { title: "Iphone 8", price: 47000 },
  ])

  return (
    <div className='container'>
      {
        productData?.map((el) => {
          return <Product title={el.title} price={el.price} />
        })
      }
    </div>
  )
}

export default App

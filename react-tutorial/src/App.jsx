import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState([])
  const [isShow, setIsShow] = useState(false)

  console.log(products)
  useEffect(() => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        // .then(json => console.log(json)) //error
        .then(json => setProducts(json.products))
  }, [])

  function handleClick(){
    setCount(count + 1) 
    console.log(count)

  }


  return (
    <>
    <h1>Hello World</h1>
    <button onClick={handleClick}>Counting...</button>
    <p>Total: {count}</p>
    <h2>Products</h2>
    {products.map(product => (
      <div key={product.id}>
      <h2>{product.title}</h2>
      <p>{product.price}</p>
    </div>
    ))
    }
    </>
  )
}

export default App


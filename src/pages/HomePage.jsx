import { useEffect, useState } from "react"
import { Product } from "./Product"
import { NavLink } from "react-router-dom"

export const HomePage = () => {

    const [productData, setProductData] = useState([
        { title: "Iphone 6", price: 32000 },
        { title: "Iphone 7", price: 38000 },
        { title: "Iphone 8", price: 47000 },
    ])
    const [addcart, setAddCart] = useState([])
    useEffect(() => {
        console.log(addcart)
    }, [addcart])
    return (
        <div className='container'>
            <NavLink to={"/"}><button>Home</button></NavLink>
            <NavLink to={"/add"}><button>AddProduct</button></NavLink>
            {
                productData?.map((el) => {
                    return <Product title={el.title} price={el.price} addcart={addcart} setAddCart={setAddCart} />
                })
            }
        </div>
    )
}
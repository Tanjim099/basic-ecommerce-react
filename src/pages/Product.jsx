import { useEffect, useState } from "react"

export const Product = ({ title, price, addcart, setAddCart }) => {
    return (
        <div className="product">
            <div className="product-title">{title}</div>
            <div className="product-price">{price}</div>
            <button onClick={() => { setAddCart([...addcart, { title, price }]) }}>Add to Cart</button>
        </div>
    )
}
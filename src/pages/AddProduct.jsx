import { NavLink } from "react-router-dom"

export const AddProduct = () => {
    return (
        <div>
            <NavLink to={"/"}><button>Home</button></NavLink>
            <NavLink to={"/add"}><button>Add Product</button></NavLink>
            <h2>Add a New Product</h2>
            <label for="product-title">Product Title:</label>
            <input type="text" id="product-title" name="product-title" required />
            <label for="product-price">Product Price:</label>
            <input type="number" id="product-price" name="product-price" step="0.01" required />
            <button type="submit">Add Product</button>
        </div>
    )
}
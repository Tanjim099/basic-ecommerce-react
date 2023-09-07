export const Product = ({ title, price }) => {
    return (
        <div className="product">
            <div className="product-title">{title}</div>
            <div className="product-price">{price}</div>
        </div>
    )
}
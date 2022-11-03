import "./ProductCard.css"
function ProductCard(props) {
    const product = props.product
    return (
        <div className="card">
            <div className="card-body">
                <div className="title">{product.title}</div>
                <div className="price">${product.price}</div>
                <button className="card-button"> Add To Cart</button>
            </div>
        </div>
    )
}
export default ProductCard
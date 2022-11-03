import {productsArray} from '../productsStore'
import ProductCard from '../components/ProductCard';
function Store() {
    return(
        <>
            <h1>Welcome to the store!</h1>
            <div>
                {productsArray.map((product, idx) => (
                    <div key={idx}>
                        <ProductCard  product={product}/>

                    </div>
                ))}
            </div>
        </>
        
    )
}

export default Store;
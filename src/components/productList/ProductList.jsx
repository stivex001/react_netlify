import "./productList.css"
import Product from "../product/Product"
import {Products} from "../data"


const ProductList = () => {
    return (
        <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">Create & inspire. It's Baistevoo</h1>
            <p className="pl-desc">
                Baistevoo is a ceative portfolio that your work has been waiting for. Beautiful homes, sunning portfolio styles & a whole lot more awaits inside.
            </p>
        </div>
        <div className="pl-list">
            {Products.map(item=>(
                <Product key={item.id} img={item.img} link={item.link} />
            ))}
        </div>
     </div>
    )
}

export default ProductList

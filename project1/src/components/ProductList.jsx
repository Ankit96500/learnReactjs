
import ProductItem from "./ProductItem";


function ProductList(){
    const products = ["Laptop", "Phone", "Headphones"];
    return (
        <>
        {
            products.map((prod,index)=>(
                <ProductItem key= {index} name= {prod} />
            ))
        }
        </>
    );

}


export default ProductList

//import SHOP_DATA from '../../shop-data.json';
import {useContext} from 'react';
import {Productcontxt} from '../../contexts/products.context';
import ProductCard from '../../Component/product-card/product-card.component';
import './shop.styles.scss';
const Shop = ()=>{
    const {products}= useContext(Productcontxt);
    return (
        <div className='products-containers'>
        {products.map((product)=>(
            <ProductCard product={product} key={product.id}/>
        ))}
        </div>
    )
}
export default Shop;
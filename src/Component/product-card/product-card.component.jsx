import Button from '../button/button.component';
import { useContext } from 'react';
import {Cartcontext} from '../../contexts/cart.context';
import './product-card.styles.scss';
 
const ProductCard =({product})=>{
    const {name,price,imageUrl}= product;
    const {addItemToCart}= useContext(Cartcontext);
    const onclicking =()=> addItemToCart(product);
    return (
        <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={onclicking}>Add to Cart</Button>
        </div>
    )
}
export default ProductCard;
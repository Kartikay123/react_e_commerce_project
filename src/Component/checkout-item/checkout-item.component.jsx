import './checkout-item.styles.scss';
import { useContext } from 'react';
import { Cartcontext } from '../../contexts/cart.context';

const CheckoutItem = ({ carditem }) => {
    const { imageUrl, name, price, quantity } = carditem;
    const { clearcartfromcheckout, addItemToCart, removeitemfromcart } = useContext(Cartcontext);
    const icrementing=()=> addItemToCart(carditem);
    const decrementing=()=> removeitemfromcart(carditem);
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={decrementing}>
                    &#10094;
                </div>
                <span className='value'>
                    {quantity}
                </span>
                <div className='arrow' onClick={icrementing}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearcartfromcheckout(carditem)}>&#10005;</div>
        </div>
    )
}
export default CheckoutItem;
import './card-dropdown.styles.scss';
import Button from '../button/button.component'
import Carditems from '../card-items/card-items.component';
import {useContext} from 'react';
import { Cartcontext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
const Dropdown =()=>{
    const {carditem}=useContext(Cartcontext);
    const navigate = useNavigate();
    const GotoCheckout =()=>{
        navigate('/checkout');
    }
    return(
        <div className='cart-dropdown-container'>
        <div className='cart-items'>
        {
            carditem.length?(
                carditem.map(items=>( <Carditems  key ={items.id} cardpassitem={items}/>)
                )

            ):(
                <span>your cart is empty</span>
            )
        }
        </div>
        <Button onClick={GotoCheckout}>GO TO CHECKOUT</Button>

        </div>
    );
}
export default Dropdown;
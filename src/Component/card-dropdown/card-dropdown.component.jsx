import './card-dropdown.styles.scss';
import Button from '../button/button.component'
import Carditems from '../card-items/card-items.component';
import {useContext} from 'react';
import { Cartcontext } from '../../contexts/cart.context';
const Dropdown =()=>{
    const {carditem}=useContext(Cartcontext);
    return(
        <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {carditem.map(items=> <Carditems  key ={items.id} cardpassitem={items}/>)}
        </div>
        <Button>GO TO CHECKOUT</Button>

        </div>
    );
}
export default Dropdown;
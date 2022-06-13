import './cart-icon.styles.scss';
import {ReactComponent as Shoppingicon} from '../../assets/shopping-bag.svg';
import {useContext} from 'react';

import { Cartcontext } from '../../contexts/cart.context';
 const Carticon =()=>{
    const {iscartopen,setiscartopen,cartcount}= useContext(Cartcontext);
    const ToggleIsopen =()=> setiscartopen(!iscartopen);
    return (
        <div className='cart-icon-container' onClick={ToggleIsopen}>
            <Shoppingicon className='shopping-icon'/>
            <span className='item-count'>{cartcount}</span>
        </div>
    )
 }
 export default Carticon;
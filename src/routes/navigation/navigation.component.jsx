import { Fragment,useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import {ReactComponent as Crownlogo} from '../../assets/crown.svg';
import './navigation.styles.scss';
import Carticon from "../../Component/cart-icon/cart-icon.component";
import Dropdown from "../../Component/card-dropdown/card-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { Cartcontext } from "../../contexts/cart.context";
import {Signoutuser} from '../../utils/firebase/firebase.utils';
const Navigation = () => {
  const{currentuser,setcurrentuser}=useContext(UserContext);
  const {iscartopen} =useContext(Cartcontext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <Crownlogo className='logo'/>
        </Link>
        
        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            SHOP
          </Link>
          {
            currentuser?(
              <span className="nav-link" onClick={Signoutuser}>SIGN OUT</span>
            ):(
              <Link className="nav-link" to='/auth'>
            SIGN IN
          </Link>
            )
          }
         <Carticon/>
        </div>
        {iscartopen&&<Dropdown/>}
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navigation;
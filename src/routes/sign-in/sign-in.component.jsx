import './sign-in.styles.scss';
import {signInWithGoogle,createuserdocumentfromauth} from '../../utils/firebase/firebase.utils';

const Signin =()=>{
    const loginGoogleuser =async ()=>{
        const {user} =await signInWithGoogle();
        const Userdocref= await createuserdocumentfromauth(user);
    }
    return(
        <div>
         <h1>I am at Sign in page</h1>
            <button onClick={loginGoogleuser}>
                sign in with Google
            </button>
        </div>
       
    )
}
export default Signin;
import './sign-in.styles.scss';
import {signInWithGoogle,auth,createuserdocumentfromauth,signInWithGoogleredirect} from '../../utils/firebase/firebase.utils';
import Signupform from '../../Component/sign-up/sign-up.component';
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
            <br/>
            <Signupform/>
           
        </div>
       
    )
}
export default Signin;

// import { useEffect } from 'react';
// import {getRedirectResult} from 'firebase/auth';
//import '../../Component/sign-up/sign-up.component';
//import { async } from '@firebase/util';
// useEffect(() => {
    //     (async () => {
    //       const response = await getRedirectResult(auth);
    //       if (response) {
    //         const userDocRef = await createuserdocumentfromauth(response.user);
    //       }
    //     })();
    //   }, []);
     
            {/* <button onClick={signInWithGoogleredirect}>
                sign in with Google Redirect.
            </button> */}
// const loginGoogleredirect =async ()=>{
    //     const {user} =await signInWithGoogleredirect();
    //     const Userdocref= await createuserdocumentfromauth(user);
    // }
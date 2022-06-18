import './authentication.styles.scss';
import {signInWithGoogle,auth,createuserdocumentfromauth,signInWithGoogleredirect} from '../../utils/firebase/firebase.utils';
import Signupform from '../../Component/sign-up-form/sign-up-form.component';
import Signinform from '../../Component/sign-in-form/sign-in-form.component';
const Authentication =()=>{
   
    return(
        <div className='authentication-container'>
        
          
            <Signupform/>
            <Signinform/>
           
        </div>
       
    )
}
export default Authentication;

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
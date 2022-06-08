import './sign-in-form.styles.scss';
import { useState } from 'react';
import Forminput from '../form-input/form-input.component';
import Button from '../button/button.component';
import   {signInWithGoogle,createuserdocumentfromauth,SigncreateAuthUserWithEmailAndPassword} from'../../utils/firebase/firebase.utils';
const Signinformtype ={
   
    email:'',
    password:'',
    
};


const Signinform =()=>{

    const[formfield,setformfield]= useState(Signinformtype);
    const {email,password}=formfield;
    
    const resetFormfield=()=>{
        setformfield(Signinformtype);
    }
    const signInWala =async ()=>{
        const {user} =await signInWithGoogle();
        await createuserdocumentfromauth(user);
    }

    const handler=async (event)=>{
        event.preventDefault();
        
        
        try{
            
          const re= await SigncreateAuthUserWithEmailAndPassword(email,password);
          console.log(re);
            resetFormfield();
        }
        catch(error){
            switch(error.code)
            {
                case 'auth/wrong-password':
                alert("incorrect password");
                break;
                case 'auth/user-not-found':
                    alert("user does not exist");
                    break;
                default:
                    console.log(error);
            }
            
           

        }
    }    

   // console.log(formfield);
    const handle =(event)=>{
        const {name,value}=event.target;
        setformfield({...formfield, [name]:value})
    }
    return (
        <div className='Sign-in-container'>
            <h2>Already have an Account Sign in</h2>
            <span>Sign in With Email and Password</span>
            <form onSubmit={handler}>
               
                <Forminput label='Email'type='email' required onChange={handle} name='email'value={email}/>

                <Forminput label='Password'type='password' required onChange={handle} name='password'value={password}/>
                <div className='buttons-container'>
                <Button  type='submit'>Sign IN</Button>
                
                <Button  type='button' buttonType='google'onClick={signInWala}>Google Sign IN</Button>
                </div>
               
            </form>
        </div>
    )
}
export default Signinform;
import './sign-up-form.styles.scss';
import { useState } from 'react';
import Forminput from '../form-input/form-input.component';
import Button from '../button/button.component';
import {createAuthUserWithEmailAndPassword,createuserdocumentfromauth}  from '../../utils/firebase/firebase.utils';


const Sigupformtype =
{
    displayname:'',
    email:'',
    password:'',
    confirmpassword:''
};

const Signupform =()=>{

    const[formfield,setformfield]= useState(Sigupformtype);
    const {email,password,confirmpassword,displayname}=formfield;


    const resetFormfield=()=>{
        setformfield(Sigupformtype);
    }

    const handler=async (event)=>{
        event.preventDefault();
        
        if(password!==confirmpassword)
        {
            alert("password does not match");
            return;
        }
        try{
            //console.log('1');
            const {user}= await createAuthUserWithEmailAndPassword(email,password);
            await createuserdocumentfromauth(user,{displayname});
            resetFormfield();
        }
        catch(error){
            if(error.code==='auth/email-already-in-use')
            {
                alert('email already exist');
            }
            else
            console.log('An error wlala occured',error);
        }
    }    


    const handle =(event)=>{
        const {name,value}=event.target;
        setformfield({...formfield, [name]:value})
    }
    return (
        <div className='Sign-up-container'>
            <h2>Don't have an Account Sign up</h2>
            <span>Sign up With Email and Password</span>
            <form onSubmit={handler}>
                <Forminput label ='Display Name'type='text' required onChange={handle} name='displayname' value={displayname}/>

                <Forminput label='Email'type='email' required onChange={handle} name='email'value={email}/>

                <Forminput label='Password'type='password' required onChange={handle} name='password'value={password}/>

                <Forminput label ='Confirm Password'type='password' required onChange={handle} name='confirmpassword'value={confirmpassword}/>
                
                <Button  type='submit'>Sign Up</Button>
            </form>
        </div>
    )
}
export default Signupform;
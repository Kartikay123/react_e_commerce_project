import {createContext,useState,useEffect} from 'react'
import { UseronAuthChange,createuserdocumentfromauth } from '../utils/firebase/firebase.utils';
// it is simialr to critical variable in crticial sectoon in OS
 
export const UserContext = createContext({
    currentuser: null,
    setcurrentuser: ()=>null
});

export const UserProvider=({children})=>{
const[currentuser,setcurrentuser]= useState(null);
const value ={currentuser,setcurrentuser};
useEffect(()=>{
    
    const unsubscribe =UseronAuthChange((user)=>{
        if(user){
        createuserdocumentfromauth(user);
        }
        setcurrentuser(user);
    })
    return unsubscribe;
},[])
return <UserContext.Provider value={value}>
    {children}
</UserContext.Provider>
}

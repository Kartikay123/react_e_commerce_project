import {initializeApp} from 'firebase/app';
import {getAuth ,signInWithPopup,signInWithRedirect,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';

//doc: getting the document, getdoc getting the data setdoc setting the data 
const firebaseConfig = 
{
    apiKey: "AIzaSyBnySGsqCTRj-yTuehDwYHr8hMWRVGKfOU",
    authDomain: "e-commerce-react-js-aef67.firebaseapp.com",
    projectId: "e-commerce-react-js-aef67",
    storageBucket: "e-commerce-react-js-aef67.appspot.com",
    messagingSenderId: "298735367653",
    appId: "1:298735367653:web:cd484a7c648ae70dc2ab0c"
  };
  

  // Initialize Firebase  creating reading updating deleting
  const firebaseApp = initializeApp(firebaseConfig);


  // provider is of google you can call github facebook and other provider as well
  const provider= new GoogleAuthProvider();
  provider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth=getAuth();
  export const signInWithGoogle=()=> signInWithPopup(auth,provider);
  export const signInWithGoogleredirect=()=> signInWithRedirect(auth,provider);
  export const db= getFirestore();

  export const createuserdocumentfromauth= async(userAuth, additionalInformation={})=>{
    if(!userAuth) return;
     const Userdocref =doc(db,'users',userAuth.uid);
     console.log(Userdocref);
    const userdata=await getDoc(Userdocref);
    console.log(userdata.exists());


    //if the userdata does not exist in firestore then:
    if(!userdata.exists())
    {
      const {displayName,email}=userAuth;
      const CreatedAt =new Date();
      try{
          await setDoc(Userdocref,
        {
          displayName,email,CreatedAt,
          ...additionalInformation
        });
      }
      catch(error)
      {
        console.log('error created',error.message);
      }
    }
    return Userdocref;
  }
  //xport const Createauthuseremailpassword = async (email, password) => {
  //   if (!email || !password) return;
  
  //   return await Createauthuseremailpassword(auth, email, password);
  // };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  };
  export const SigncreateAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
  };
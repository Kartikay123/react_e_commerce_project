//import { async } from '@firebase/util';
import {initializeApp} from 'firebase/app';
import {getAuth ,signInWithPopup,signInWithRedirect,GoogleAuthProvider,
  createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs} from 'firebase/firestore';

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



  export const addcollection= async(collectionkey,objecttoadd)=>{
    const collectionRef =collection(db,collectionkey);
    const batch = writeBatch(db);

    objecttoadd.forEach((object)=>{
      const docRef = doc(collectionRef,object.title.toLowerCase());
      batch.set(docRef,object);
    });
    await batch.commit();
    console.log('done');

  }

  export const getcategoriesanddocuments= async()=>{
    const collectionRef=collection(db,'categories');
    const q = query(collectionRef);
    
    const querySnapshot= await getDocs(q);
    const CategoryMap= querySnapshot.docs.reduce((ac,docSnapshot)=>{
      const {title,items}= docSnapshot.data();
      ac[title.toLowerCase()]=items;
      return ac;

    },{})
    return CategoryMap;
  }

  export const createuserdocumentfromauth= async(userAuth, additionalInformation={})=>{
    if(!userAuth) return;
     const Userdocref =doc(db,'users',userAuth.uid);
     //console.log(Userdocref);
    const userdata=await getDoc(Userdocref);
    //console.log(userdata.exists());


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
  export const Signoutuser =async ()=> await signOut(auth);

  export const UseronAuthChange= (callback)=>  onAuthStateChanged(auth,callback);

  //  export const UseronAuthChange= (callback)=>  onAuthStateChanged(auth,callback,errorcallback,completecallaback);

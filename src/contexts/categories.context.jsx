import {createContext,useState,useEffect} from 'react';
import SHOP_DATA from '../shop-data.js';
import { getcategoriesanddocuments } from '../utils/firebase/firebase.utils.jsx';
export const CategoryContext = createContext({
    Categorieswalamap: {},
})

export const CategoryContextProvider=({children})=>{
    const [Categorieswalamap,setCategorieswalamap] =useState({});


    useEffect(()=>{
        const getCategoryMap= async ()=>{
            const resp=await getcategoriesanddocuments();
            //console.log(resp);
            setCategorieswalamap(resp);
        }
        getCategoryMap();
    },[])
    // useEffect(()=>{
    //     addcollection('categories',SHOP_DATA);
    //     },[]);

    
    const value ={Categorieswalamap};
    return(
        <CategoryContext.Provider value={value}>
            {children}
        </CategoryContext.Provider>
    )
}
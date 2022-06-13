import { createContext,useState,useEffect} from 'react';
const addcartitem=(carditem, Productseaddkarna)=>{
    // if the product you want to add is alreasy present then increment its count
    const existingCarditem = carditem.find((carditem)=>
     carditem.id===Productseaddkarna.id);
    if(existingCarditem)
    {
    return carditem.map((carditem)=>
    carditem.id===Productseaddkarna.id?
    {...carditem,quantity:carditem.quantity+1}
    :carditem
    )
    }
    //ekse add the product into the cart
    return [...carditem ,{...Productseaddkarna, quantity:1}];
}

const removecartitem =(carditem,Productseremovekarna)=>{
    const existingCarditem = carditem.find((carditem)=>
    carditem.id===Productseremovekarna.id);
    
    // if item present whose quantity is 1 then remove it from card
    if(existingCarditem.quantity===1)
    {
        return carditem.filter(carditem=>carditem.quantity!==Productseremovekarna.quantity)
    }

    //else reduce its value by 1
    return carditem.map((carditem)=>
    carditem.id===Productseremovekarna.id?
    {...carditem,quantity:carditem.quantity-1}
    :carditem
    )

}
const clearcartitem=(carditem,checkoutseremovekarna)=>{
    return carditem.filter((carditem)=> carditem.id!==checkoutseremovekarna.id);
}
export const Cartcontext = createContext({
    iscartopen:false,
    setiscartopen:()=>{},
    carditem: [],
    addItemToCart:()=>{},
    cartcount:0,
    removeitemfromcart:()=>{},
    clearcartfromcheckout:()=>{},
    total:0
})

export const CartcontextProvider =({children})=>{

    const [iscartopen,setiscartopen]=useState(false);

   

    const [carditem,setcarditem]= useState([]);

    const [cartcount,setcartcount]= useState(0);

    const [total,settotal]= useState(0);

    useEffect(()=>{
        const newcardcount=()=> carditem.reduce((total,carditem)=>total+carditem.quantity,0)
        setcartcount(newcardcount);
    },[carditem])

    useEffect(()=>{
        const newcarttoal=()=> carditem.reduce((total,carditem)=>total+carditem.quantity*carditem.price,0)
        settotal(newcarttoal);
    },[carditem])


    const addItemToCart=(Productseaddkarna)=>{
       setcarditem(addcartitem(carditem,Productseaddkarna));
    }

    const removeitemfromcart=(Productseremovekarna)=>{
        setcarditem(removecartitem(carditem,Productseremovekarna));
     }

     const clearcartfromcheckout=(checkoutseremovekarna)=>{
        setcarditem(clearcartitem(carditem,checkoutseremovekarna));
     }



    const value ={iscartopen,setiscartopen,total, carditem,addItemToCart,cartcount,removeitemfromcart,clearcartfromcheckout};
    return(
        <Cartcontext.Provider value={value}>
            {children}
        </Cartcontext.Provider>
    )
}

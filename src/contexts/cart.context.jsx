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
export const Cartcontext = createContext({
    iscartopen:false,
    setiscartopen:()=>{},
    carditem: [],
    addItemToCart:()=>{},
    cartcount:0,
})

export const CartcontextProvider =({children})=>{

    const [iscartopen,setiscartopen]=useState(false);

   

    const [carditem,setcarditem]= useState([]);

    const [cartcount,setcartcount]= useState(0);

    useEffect(()=>{
        const newcardcount=()=> carditem.reduce((total,carditem)=>total+carditem.quantity,0)
        setcartcount(newcardcount);
    },[carditem])
    const addItemToCart=(Productseaddkarna)=>{
       setcarditem(addcartitem(carditem,Productseaddkarna));
    }
    const value ={iscartopen,setiscartopen, carditem,addItemToCart,cartcount};
    return(
        <Cartcontext.Provider value={value}>
            {children}
        </Cartcontext.Provider>
    )
}

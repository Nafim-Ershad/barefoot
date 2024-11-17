'use client'

import { browseDataType } from "@/data/data";

import { CartContext, tCart } from "@/providers/Cart/Cart.Context";

import { HTMLAttributes, ReactNode, useContext} from "react";

interface iProductCard extends HTMLAttributes<HTMLDivElement>{
    item: browseDataType
}

export default function Index({ item }: iProductCard): ReactNode{

    const { cartItems, setCartItems } = useContext(CartContext);

    const addToCart = (addItem: browseDataType) => {
        // console.log("Item: ",addItem)
        setCartItems((prevState: tCart[]) => {
            console.log("Previous State: ", prevState);

            const newArray: tCart[] = []; 
            
            prevState.forEach((element) => {
                if(element.item.id === addItem.id){
                    console.log(true);
                    element.quantity += 1;
                }
                console.log("Element2: ", element);
                newArray.push({
                    item: addItem,
                    quantity: 1
                })
            });

            console.log("New Array: ", newArray);

            return newArray;
        });
    }

    return(
        <div 
        className="lg:w-[350px] lg:h-[550px] w-[300px] h-[450px] shrink grow-0 px-4 py-3 border border-solid border-slate-200 rounded-xl shadow-lg flex flex-col items-center justify-between text-black"
        >
            <div className="h-2/3 w-full">
                <img src={item?.imgURL} alt="product" className="w-full h-full rounded-xl"/>
            </div>
            <h2 className="w-full text-left lg:text-2xl text-xl">{ item?.name }</h2>
            <span className="w-full flex items-center justify-between">
                <p>Colors: </p>
                <span className="flex items-center justify-center gap-1">
                    { 
                        item?.colors.map((color, idx) => 
                            <span style={{ background: color }} className={`w-4 h-4 rounded-full border-solid border border-black`} key={idx}>
                            </span>
                        ) 
                    }
                </span>
            </span>  
            <span className="w-full lg:text-2xl text-xl">
                ${ item?.price.toFixed(2) }
            </span>
            <div 
                className="w-full lg:py-4 py-2 border-solid border-black border-[1px] flex items-center justify-center text-xl cursor-pointer hover:bg-black hover:text-white  transition-all duration-200"
                onClick={() => addToCart(item)}
            >
                Add To Cart
            </div>
        </div>
    )
}
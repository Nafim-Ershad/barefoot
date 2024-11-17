'use client'

import { HTMLAttributes, ReactNode, useState } from "react";
import { CartContext, tCart } from "./Cart.Context";

export default function CartProvider({ children }: HTMLAttributes<HTMLDivElement>): ReactNode{
    const [ cartItems, setCartItems ] = useState<tCart[]>([]);

    return(
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            { children }
        </CartContext.Provider>
    )
}
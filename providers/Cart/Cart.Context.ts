import { Dispatch, SetStateAction, createContext } from "react";

import { browseDataType } from "@/data/data";

export type tCart = {
    item: browseDataType,
    quantity: number
}

interface iCart {
    cartItems: tCart[],
    setCartItems: Dispatch<SetStateAction<tCart[]>>
}

const initialState: tCart[] = []

export const CartContext = createContext<iCart>({
    cartItems: [ ...initialState ],
    setCartItems: () => {}
})

/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { ReactNode, useContext, useEffect } from "react"
import { usePathname } from "next/navigation";
import Image from "next/image"
import Link from "next/link"

import { ShoppingBag, Heart } from 'lucide-react';

import { AppContext } from "@/providers/AppProvider";

export default function NavBar(): ReactNode{
    const { appState, setAppState } = useContext(AppContext);
    const pathName  = usePathname();
    const changeTab = (tab: string) => {
        setAppState({
            ...appState,
            currentTab: tab
        })
    }  

    useEffect(()=>{
        switch(pathName)
        {
            case "/men":
                changeTab("men");
                break;
            case "/women":
                changeTab("women");
                break;
            case "/kids":
                changeTab("kids");
                break;
            default:
                changeTab("");
                break;
        }
    }, [pathName]);

    return(
        <header className={"relative z-10 w-full h-auto pt-3 px-8 flex items-center justify-between text-black"}>
            <div className={"w-10 h-10 flex items-center justify-center"}>
                <Image 
                    src=""
                    alt={"logo"} 
                    width={0} 
                    height={0} 
                    className={"w-full h-full"}
                />
            </div>
            <nav
                className={`md:top-1/2 md:-translate-y-1/2 px-3 py-2 absolute top-[100%] left-1/2 flex items-center justify-between gap-16 -translate-x-1/2`}
            >
                <Link 
                    href={"/men"}
                    className={`tracking-wide ${appState.currentTab === 'men' ? 'border-b-2 border-solid border-black text-2xl font-semibold' : 'text-xl'} hover:scale-110 transition-all duration-300 ease-in-out`}
                >MEN</Link>
                <Link 
                    href={"/women"}
                    className={`tracking-wide ${appState.currentTab === 'women' ? 'border-b-2 border-solid border-black text-2xl font-semibold' : 'text-xl'} hover:scale-110 transition-all duration-300 ease-in-out`}
                >WOMEN</Link>
                <Link 
                    href={"/kids"} 
                    className={`tracking-wide ${appState.currentTab === 'kids' ? 'border-b-2 border-solid border-black text-2xl font-semibold' : 'text-xl'} hover:scale-110 transition-all duration-300 ease-in-out`}
                >KIDS</Link>
            </nav>
            <div className={"py-2 px-3 flex items-center justify-between gap-4"}>
                <ShoppingBag className={"cursor-pointer"}/>
                <Heart className={"cursor-pointer"}/>
            </div>
        </header>
    )
}
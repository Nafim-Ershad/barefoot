import { browseDataType } from "@/data/data";
import Image from "next/image";
import { HTMLAttributes, ReactNode } from "react";

interface iProductCard extends HTMLAttributes<HTMLDivElement>{
    item?: browseDataType
}

export default function Index({ item }: iProductCard): ReactNode{
    return(
        <div 
        className="w-[350px] h-[550px] px-4 py-3 border-solid border-[1px] border-black flex flex-col items-center justify-between text-black"
        >
            <div className="h-2/3 w-full">
                <Image src={item?.imgURL} alt="product" className="w-full h-full" height={0} width={0} unoptimized/>
            </div>
            <h2 className="w-full text-left text-2xl">{ item?.name }</h2>
            <span className="w-full flex items-center justify-between">
                <p>Colors: </p>
                <span className="flex items-center justify-center gap-1">
                    { 
                        item?.colors.map((color, idx) => 
                            <span style={{ background: color }} className={`w-4 h-4 rounded-full border-solid border border-black cursor-pointer`} key={idx}>
                            </span>
                        ) 
                    }
                </span>
            </span>  
            <span className="w-full text-2xl">
                ${ item?.price.toFixed(2) }
            </span>
            <div className="w-full py-4 border-solid border-black border-[1px] flex items-center justify-center text-xl cursor-pointer hover:bg-black hover:text-white  transition-all duration-200">
                Add To Cart
            </div>
        </div>
    )
}
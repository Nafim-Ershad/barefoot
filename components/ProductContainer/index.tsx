import { HTMLAttributes, ReactNode } from "react";
import ProductCard from "../ProductCard";
import { browseDataType } from "@/data/data";

interface iProductContainer extends HTMLAttributes<HTMLDivElement>{
    items: browseDataType[]
}

export default function ProductContainer({ items }: iProductContainer ): ReactNode{
    return(
        <div className="w-full h-[95%] max-h-[400px] xl:max-h-[450px] 2xl:max-h-[780px] 4xl:max-h-[960px] px-8 py-4 flex flex-wrap items-center justify-start gap-3 overflow-y-auto">
            { items.map((item, idx) => <ProductCard key={idx} item={item}/>)}
        </div>
    )
}
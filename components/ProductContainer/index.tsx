'use client';

import { HTMLAttributes, ReactNode, useContext, useMemo } from "react";
import ProductCard from "../ProductCard";

import { browseDataType } from "@/data/data";
import { FilterContext } from "@/providers/FilterOptions/FilterOptions.Context";

interface iProductContainer extends HTMLAttributes<HTMLDivElement>{
    items: browseDataType[]
}

export default function ProductContainer({ items }: iProductContainer ): ReactNode{
    
    const { filterOptions } = useContext(FilterContext);
    // useMemo for derived states || useEffect for local state
    const sortedItems = useMemo(() => {
        return [...items].sort((a, b) => {
            switch(filterOptions.sortBy){
                case "price_asc":
                    return a.price - b.price;
                case "price_desc":
                    return b.price - a.price;
                case "popular_asc":
                    return a.sold - b.sold;
                case "popular_desc":
                    return b.sold - a.sold;
            }
        });
    }, [filterOptions.sortBy, items]);

    return(
        <div className="w-full h-[85%] flex items-center justify-center overflow-y-auto">
            <div className="w-full h-full px-8 py-3 inline-flex flex-wrap items-center justify-start gap-4">
            {
                sortedItems.map((item, idx) => <ProductCard key={idx} item={item}/>)
            }
            </div>
        </div>
    )
}
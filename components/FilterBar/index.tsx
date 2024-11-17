'use client'

import { ChangeEvent, ReactNode, useState } from 'react';
import { ChevronsDown } from 'lucide-react';

import { tFilter } from '@/lib/type';
import { browseData } from '@/data/data';

function Index(): ReactNode {
    
    const [ extendedColorMenu, setExtendedColorMenu ] = useState<boolean>(false);
    const [ extendedSizeMenu, setExtendedSizeMenu ] = useState<boolean>(false);
    const [ extendedCollectionMenu, setExtendedCollectionMenu ] = useState<boolean>(false);

    const allPrices = browseData.map(data => data.price);

    const minPrice = Math.min(...allPrices);
    const maxPrice = Math.max(...allPrices);

    const [ filterState, setFilterState ] = useState<tFilter>({
        stock: 'all',
        colors: [],
        sizes: [],
        collections: [],
        price: {
            min: minPrice,
            max: maxPrice
        }
    });

    const allColors: string[] = [];
    browseData.forEach(data => data.colors.forEach(color => !allColors.includes(color) ? allColors.push(color): null));

    const allSizes: string[] = [];
    browseData.forEach(data => data.size.forEach(size => !allSizes.includes(size) ? allSizes.push(size): null));

    const allCollections: string[] = ['male', "female", "kids"];
    
    const toggleColorMenu = () => {
        setExtendedColorMenu(!extendedColorMenu);
    }
    
    const toggleSizeMenu = () => {
        setExtendedSizeMenu(!extendedSizeMenu);
    }
    
    const toggleCollectionMenu = () => {
        setExtendedCollectionMenu(!extendedCollectionMenu);
    }

    const changeCheckedFilter = (event: ChangeEvent<HTMLInputElement>, category: string, value: string) => {
        if(category === 'stock'){
            setFilterState({
                ...filterState,
                stock: value
            })
        }
        else{
            setFilterState((prevState) => {
                const categoryValues = prevState[category];

                const updatedArray = categoryValues.includes(value) ? categoryValues.filter((item: string) => item !== value) : [...categoryValues, value]; 
                
                return{
                    ...prevState,
                    [category]: updatedArray
                }
            
            });
        }
    }

    // const changePriceFilter = (event: ChangeEvent<HTMLIFrameElement>, value: number) => {
    //     return;
    // }

    return (
        <div className='sm:w-40 sm:h-[95%] px-2 py-1 border-r-[1px] hidden sm:flex sm:flex-col sm:items-start sm:justify-start gap-2 overflow-y-auto'>
            <div className='flex flex-col items-center justify-between'>
                <span className='sm:w-24 text-black flex items-center justify-start gap-3'>
                    <input type="checkbox" name="in_stock" onChange={e=> changeCheckedFilter(e, "stock", 'stock')}/>
                    <label>In Stock</label>
                </span>
                <span className='sm:w-24 text-black flex items-center justify-start gap-3'>
                    <input type="checkbox" name="coming_soon"  onChange={e=> changeCheckedFilter(e, "stock", 'soon')}/>
                    <label>Coming Soon</label>
                </span>
                <span className='sm:w-24 text-black flex items-center justify-start gap-3'>
                    <input type="checkbox" name="all"  onChange={e=> changeCheckedFilter(e, "stock", 'all')}/>
                    <label>All</label>
                </span>
            </div>
            <div className='w-full py-1 flex flex-col items-start justify-between text-black'>
                <span className='w-full flex items-center justify-between'>
                    <span className='text-md'>Colors</span>
                    <span 
                        className={`${extendedColorMenu ? 'rotate-180' : 'rotate-0'} cursor-pointer transition-all duration-300 ease-in-out`} 
                        onClick={toggleColorMenu}
                    >
                        <ChevronsDown/>
                    </span>
                </span>
                <span 
                    className={`w-full border-solid border-slate-200 flex flex-wrap items-start justify-start gap-2 transition-all duration-100 ease-in-out`}
                    style={{ height: extendedColorMenu ? "auto" : "0px", overflowY: 'auto', overflowX: "hidden", padding: extendedColorMenu ? '0.625rem 0': '0', borderBottomWidth: extendedColorMenu ? '1px' : '0px'}}
                >
                    {
                        allColors.map(
                            (color, idx) => 
                                <span key={idx} className={`px-1 py-2 border border-solid border-slate-200 drop-shadow-lg rounded-xl ${extendedColorMenu ? "flex items-center justify-between gap-3" : "hidden"} `}>
                                    <input type="checkbox" name={color} onChange={(e) => changeCheckedFilter(e, "colors", color)}/>
                                    <span style={{background: color}} className='w-3 h-3 border-solid border-black border-[1px] rounded-full'></span>
                                </span>
                        )
                    }
                </span>
            </div>
            <div className='w-full py-1 flex flex-col items-start justify-between text-black'>
                <span className='w-full flex items-center justify-between'>
                    <span className='text-md'>Size</span>
                    <span 
                        className={`${extendedSizeMenu ? 'rotate-180' : 'rotate-0'} cursor-pointer transition-all duration-300 ease-in-out`} 
                        onClick={toggleSizeMenu}
                    >
                        <ChevronsDown/>
                    </span>
                </span>
                <span 
                        className={`w-full border-solid border-slate-200 flex flex-wrap items-start justify-start gap-2 transition-all duration-100 ease-in-out`}
                        style={{ height: extendedSizeMenu ? "auto" : "0px", overflowY: 'auto', overflowX: "hidden", padding: extendedSizeMenu ? '0.625rem 0': '0', borderBottomWidth: extendedSizeMenu ? '1px' : '0px'}}
                    >
                    {
                        allSizes.map(
                            (size, idx) => 
                                <span 
                                    key={idx} 
                                    className={`min-w-12 p-2 border border-solid border-slate-200 drop-shadow-lg rounded-xl ${extendedSizeMenu ? "flex items-center justify-between" : "hidden"} text-sm`}
                                >
                                    <input type="checkbox" name={size} onChange={(e) => changeCheckedFilter(e, "sizes", size)}/>
                                    <span>{ size }</span>
                                </span>
                        )
                    }
                </span>
            </div>
            <div className='w-full py-1 flex flex-col items-start justify-between text-black'>
                <span className='w-full flex items-center justify-between'>
                    <span className='text-md'>Collection</span>
                    <span 
                        className={`${extendedCollectionMenu ? 'rotate-180' : 'rotate-0'} cursor-pointer transition-all duration-300 ease-in-out`} 
                        onClick={toggleCollectionMenu}
                    >
                        <ChevronsDown/>
                    </span>
                </span>
                <span 
                        className={`w-full border-solid border-slate-200 flex flex-wrap items-start justify-start gap-2 transition-all duration-100 ease-in-out`}
                        style={{ height: extendedCollectionMenu ? "auto" : "0px", overflowY: 'auto', overflowX: "hidden", padding: extendedCollectionMenu ? '0.625rem 0': '0', borderBottomWidth: extendedCollectionMenu ? '1px' : '0px'}}
                    >
                    {
                        allCollections.map(
                            (collection, idx) => 
                                <span 
                                    key={idx} 
                                    className={`min-w-20 px-4 py-2 border border-solid border-slate-200 drop-shadow-lg rounded-xl ${extendedCollectionMenu ? "flex items-center justify-between gap-3" : "hidden"} text-sm`}
                                >
                                    <input type="checkbox" name={collection} onChange={(e) => changeCheckedFilter(e ,"collections", collection)}/>
                                    <span className='w-full text-left'>{ collection.toUpperCase() }</span>
                                </span>
                        )
                    }
                </span>
            </div>
            {/* #################################----------- PRICE -----------################################# */}
            <div className='w-full py-1 flex flex-col items-start justify-between text-black'>
                <span className='w-full flex flex-col items-start justify-between gap-2'>
                    <span className='text-md'>Price</span>
                    <span className='w-full flex items-center justify-between gap-2'>
                        <input 
                            type="number" 
                            placeholder={`${minPrice.toFixed(2)}`} 
                            className='w-2/3 rounded-md bg-white text-black outline-none border border-solid border-slate-200 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' 
                        />
                        <input 
                            type="number" 
                            placeholder={`${maxPrice.toFixed(2)}`} 
                            className='w-2/3 rounded-md bg-white text-black outline-none border border-solid border-slate-200 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                        />
                    </span>
                </span>  
            </div>
        </div>
    )
}

export default Index;
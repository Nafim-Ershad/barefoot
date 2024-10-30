/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { ReactNode,  useState } from 'react'
import { ChevronsDown } from 'lucide-react'

import ProductContainer from '@/components/ProductContainer'

import { browseData } from '@/data/data'

function Page(): ReactNode {
    const [ filterColor, setFilterColor ] = useState<string | null>(null);
    const [ extendedMenu, setExtendedMenu ] = useState<boolean>(false);

    const allColors: string[] = [];
    browseData.forEach(data => data.colors.forEach(color => !allColors.includes(color) ? allColors.push(color): null));

    const toggleMenu = () => {
        setExtendedMenu(!extendedMenu);
    }

    // useEffect(() => {
    //     browseData.forEach(data => data.colors.forEach(color => !allColors.includes(color) ? allColors.push(color): null));
        
    // }, []);

    return (
        <div className='absolute left-0 top-0 w-full h-full flex flex-col items-center justify-end'>
            <div className='w-full sm:h-[90%] h-[85%] px-4 py-2 flex flex-col items-center justify-center gap-2'>
                {/* Sort Bar */}
                <div className='w-full h-12 border-[1px] border-solid border-slate-300 rounded-2xl px-3 flex items-center justify-between'>
                    {/* Breadcrumbs */}
                    <div>

                    </div>
                    {/* Sort Input */}
                    <div className='h-full sm:px-3 sm:py-1 flex items-center justify-between sm:gap-4 gap-1'>
                        <span className='text-black sm:inline-block hidden'>Sort By:</span>
                        <select
                            className='px-3 py-1 rounded-sm border-px border-black border-solid bg-slate-100 text-black outline-none'
                        >
                            <option value="price_asc">Price ↑</option>
                            <option value="price_des">Price ↓</option>
                            <option value="popular_asc">Popularity ↑</option>
                            <option value="popular_des">Popularity ↓</option>
                        </select>
                    </div>
                </div>
                {/* Filter and cards */}
            <div className={`w-full sm:h-full h-[90%] px-2 py-1 border-[1px] border-solid border-slate-300 rounded-2xl flex items-center justify-between sm:flex-row flex-col`}>
                    {/* Filter */}
                    <div className='sm:w-40 sm:h-full py-4 border-r-[1px] hidden sm:flex flex-col items-center justify-between gap-3'>
                        <div className='flex flex-col items-center justify-center'>
                            <span className='sm:w-24 text-black flex items-center justify-start gap-3'>
                                <input type="checkbox" name="in_stock"/>
                                <label>In Stock</label>
                            </span>
                            <span className='sm:w-24 text-black flex items-center justify-start gap-3'>
                                <input type="checkbox" name="coming_soon"/>
                                <label>Coming Soon</label>
                            </span>
                            <span className='sm:w-24 text-black flex items-center justify-start gap-3'>
                                <input type="checkbox" name="all"/>
                                <label>All</label>
                            </span>
                        </div>
                        <div className='w-full py-1 px-3 flex flex-col items-start justify-between text-black'>
                            <span className='w-full py-3 flex items-center justify-between'>
                                <span className='text-xl'>Colors</span>
                                <span className={`${extendedMenu ? 'rotate-180' : 'rotate-0'} cursor-pointer transition-all duration-300 ease-in-out`} onClick={toggleMenu}>
                                    <ChevronsDown/>
                                </span>
                            </span>
                            <span 
                            className={`w-full py-2 flex flex-wrap flex-col items-start justify-start gap-2 transition-all duration-500 ease-in-out`}
                            style={{ height: extendedMenu ? "200px" : "0px", overflowY: 'auto', overflowX: "hidden"}}
                            >
                                {
                                    allColors.map(
                                        (color, idx) => 
                                            <span key={idx} className={`px-2 py-3 border border-solid border-black rounded-xl ${extendedMenu ? "flex items-center justify-between gap-3" : "hidden"} `}>
                                                <input type="checkbox" name={color}/>
                                                <span style={{background: color}} className='w-3 h-3 border-solid border-black border-[1px] rounded-full'></span>
                                            </span>
                                    )
                                }
                            </span>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    {/* Cards */}
                    <div className='w-full h-full flex items-start justify-center'>
                        <ProductContainer items={browseData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
import { ReactNode } from 'react'

import { browseData } from '@/data/data'
import ProductContainer from '@/components/ProductContainer'

function Page(): ReactNode {
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
                <div className='sm:w-40 sm:h-full py-4 hidden sm:flex flex-col items-center justify-between gap-3'>
                    <span className='flex flex-col items-center justify-center'>
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
                    </span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
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
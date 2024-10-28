import React from 'react'

function Page() {
  return (
    <div className='w-full h-3/4 px-4 py-2 flex flex-col items-center justify-center'>
        {/* Sort Bar */}
        <div className='w-full h-12 border-[1px] border-solid border-slate-300 rounded-2xl px-3 flex items-center justify-between'>
            {/* Breadcrumbs */}
            <div>

            </div>
            {/* Sort Input */}
            <div className='h-full sm:px-3 sm:py-1 flex items-center justify-between sm:gap-4 gap-1'>
                <span className='text-black sm:inline-block hidden'>Sort By:</span>
                <select
                    className='px-3 py-1 rounded-md border-px border-black border-solid bg-slate-100 text-black outline-none'
                >
                    <option value="price_asc">Price ↑</option>
                    <option value="price_des">Price ↓</option>
                    <option value="popular_asc">Popularity ↑</option>
                    <option value="popular_des">Popularity ↓</option>
                </select>
            </div>
        </div>
        {/* Filter and cards */}
        <div>
            {/* Filter */}
            <div></div>
            {/* Cards */}
            <div></div>
        </div>
    </div>
  )
}

export default Page
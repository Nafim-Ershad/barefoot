'use client'

import { ReactNode } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { BookUser, CircleUser, CreditCard, ScrollText } from 'lucide-react';

type UserLayoutProps = {
  children: ReactNode
}

function Layout({ children }: UserLayoutProps ): ReactNode {
  const { userID } = useParams();
  return (
    <div className='w-[95%] h-[98%] flex items-center justify-start shadow-lg rounded-3xl'>
      {/* Left Section */}
        <div className='md:w-full md:max-w-40 w-16 md:h-[95%] h-[50%] border-r-[1px] border-solid border-slate-300 flex flex-col items-center justify-center'>
          <div className='px-2 py-4'>
            <Link 
              className='p-2 rounded-xl flex items-center justify-start gap-4 hover:bg-black hover:text-white'
              href={`/user/${userID}/orders`}
            >
              <ScrollText/>
              <p className='md:inline-block hidden'>Orders</p>
            </Link>
            <Link 
              className='p-2 rounded-xl flex items-center justify-start gap-4 hover:bg-black hover:text-white'
              href={`/user/${userID}/account`}
            >
              <CircleUser/>
              <p className='md:inline-block hidden'>Account</p>
            </Link>
            <Link 
              className='p-2 rounded-xl flex items-center justify-start gap-4 hover:bg-black hover:text-white'
              href={`/user/${userID}/payment`}
            >
              <CreditCard/>
              <p className='md:inline-block hidden'>Payment</p>
            </Link>
            <Link 
              className='p-2 rounded-xl flex items-center justify-start gap-4 hover:bg-black hover:text-white'
              href={`/user/${userID}/address`}
            >
              <BookUser/>
              <p className='md:inline-block hidden'>Address</p>
            </Link>
          </div>
        </div>
      {/* Right Section */}
      <div className='w-full h-[98%] flex flex-col items-center justify-center'>
        { children }
      </div>
    </div>
  )
}

export default Layout;
import { HTMLAttributes, ReactNode } from "react";

function Layout({ children }: HTMLAttributes<HTMLDivElement>): ReactNode{
    return(
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-black'>
            { children }
        </div>
    )
}

export default Layout;
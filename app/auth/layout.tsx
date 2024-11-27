import { HTMLAttributes, ReactNode } from "react";

import { tUser } from "@/lib/type";

interface iLayout extends HTMLAttributes<HTMLDivElement>{
    user: tUser | null;
}

function Layout({ children }: iLayout): ReactNode{
    return(
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-black'>
            { children }
        </div>
    )
}

export default Layout;
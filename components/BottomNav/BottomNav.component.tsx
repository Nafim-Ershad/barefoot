import { Home, Search, User } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import AvatarComponent from "../Avatar/Avatar.component";



export default function BottomNav(): ReactNode {
    const user = {
        id: '123456789'
    }; // Just a placeholder
    return(
        <div className={"absolute bottom-5 left-0 w-full h-10 px-6 flex items-center justify-center text-black"}>
            <div className="relative w-full h-full flex items-center justify-between">
                <Link
                    href={'/browse'}
                    className={"absolute sm:left-[40%] left-[30%] -translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:scale-150 transition-all duration-200 ease-in-out"}
                    >
                    <Search/>
                </Link>
                <Link
                    href={'/'}
                    className={"absolute left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 hover:scale-150 transition-all duration-200 ease-in-out"}
                    >
                    <Home/>
                </Link>
                <Link
                    href={`${user ? `/user/${user.id}` : '/account'}`}
                    className={"absolute sm:right-[40%] right-[30%] translate-x-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-slate-100 hover:scale-150 transition-all duration-200 ease-in-out"}
                >
                    {
                        user ? 
                        <AvatarComponent/>
                        :
                        <User/>
                    }
                </Link>
            </div>
                
        </div>
    )
}
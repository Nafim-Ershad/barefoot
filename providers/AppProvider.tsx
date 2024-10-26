"use client"

import { createContext, useState, ReactNode, HTMLAttributes, Dispatch, SetStateAction } from "react"

type tApp = {
    currentTab: 'men' | 'women' | 'kids' | string
}

interface iApp{
    appState: tApp;
    setAppState: Dispatch<SetStateAction<tApp>>
}

const initialState: tApp = {
    currentTab: "none"
}

export const AppContext = createContext<iApp>({
    appState: {...initialState},
    setAppState: () => {}
});

export default function AppProvider(props: HTMLAttributes<HTMLDivElement>): ReactNode{
    const [ state, setState ] = useState<tApp>({
        ...initialState
    });

    return(
        <AppContext.Provider value={{appState: state, setAppState: setState}}>
            {props.children}
        </AppContext.Provider>
    )
}
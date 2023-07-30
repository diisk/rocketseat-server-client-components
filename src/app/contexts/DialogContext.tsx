'use client'

import {ReactNode, createContext, useState} from 'react'

interface DialogContextType{
    count: number,
    addCount: () => void
}

export const DialogContext = createContext({} as DialogContextType);

export function DialogProvider({children}:{children:ReactNode}){
    const [count,setCount] = useState(0);
    
    function addCount(){
        setCount(state=>state+1);
    }

    return (
        <DialogContext.Provider value={{count,addCount}}>
            {children}
        </DialogContext.Provider>
    )
}
'use client'

import { useContext } from "react";
import { DialogContext } from "../contexts/DialogContext";

export function Dialog(){
    const {count,addCount} = useContext(DialogContext)

    return <button onClick={()=>addCount()}>Increment {count}</button>;
}
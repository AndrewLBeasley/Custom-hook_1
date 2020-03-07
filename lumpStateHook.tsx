import { useState } from "react";


export const useLumpState = (state: any) => {
    let copy = { ...state };
    
    for (let i in copy) {
        const [get, set] = useState(copy[i])

        copy[i] = { get, set };        
    }
    
    return copy;
}

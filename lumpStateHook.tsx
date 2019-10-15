import { useState } from "react";


export const useLumpState = (state: any) => {
    let copy = { ...state };
    let count = 0;
    for (let i in copy) {
        const [get, set] = useState(copy[i])

        copy[i] = { get, set };
        count++;
    }

    // if (count == Object.keys(copy).length)
        return copy;
}
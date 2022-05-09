import { useState } from "react";

export const useInput = ()=>{
    const [state, setState] = useState()

    return {
        state, setState
    }
}
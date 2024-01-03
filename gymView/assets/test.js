import React from 'react';

export const Test=()=>{
    const [b,setB]=React.useState("a")
    return(
        <div>
            {b}
            <button onClick={()=>setB(prev=>prev+"a")}>
                add
            </button>
        </div>
    ) 
}
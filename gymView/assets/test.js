import React from 'react';

export const Test=()=>{
    const [b,setB]=React.useState(1)
    return(
        <div>
            {b}
            <button onClick={()=>setB(prev=>prev+1)}>
                add
            </button>
        </div>
    ) 
}
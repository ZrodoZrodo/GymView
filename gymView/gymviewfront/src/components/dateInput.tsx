import { useState } from "react"

export const DateInput=()=>{
    
    const [date,setDate]=useState<string>(`${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDay()}`)

    
    return(
        <div className="flex flex-col ">
            <>Wybierz datę treningu</>
            <input value={date} onChange={(e)=>setDate(e.target.value) }type="date" className="bg-gray-800 rounded-md h-9 w-full text-md text-white"/>

    </div>
    )
}
import React,{ useState } from "react"
import { HorizontalPicker } from "../components/horizontalPicker"

export const Week=()=>{
    const [scrollTop, setScrollTop] = useState(0)
    const [date,setDate]=useState(`${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDay()}`)

    return(
        <div className="min-h-screen max-h-full bg-black text-white flex flex-col space-y-36 pt-16 items-center">
            <>Wybierz datę treninguu</>
            <input value={date} onChange={(e)=>setDate(e.target.value) }type="date" className="bg-gray-800 rounded-md h-9 w-1/2 text-white"/>

    <div className='text-center bg-black text-white text-4xl'>
    <b>{scrollTop} kg</b>
<HorizontalPicker background={'black'} color={'orange'} step={2.5} StateHandler={setScrollTop} range={[1,600]}/>
    </div>
    <button className="bg-orange-400 h-12 w-1/3 rounded-md">Zapisz</button>
    </div>
    )
}
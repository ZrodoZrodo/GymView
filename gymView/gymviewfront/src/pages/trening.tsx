import { useState } from "react"
import { Input } from "../components/input"
import { DateInput } from "../components/dateInput"
import { Textarea } from "../components/textarea"
import { PickList } from "../components/pickList"

export const Trening=()=>{

    const [trenig,setTrenig]=useState<{
        exercises:Array<string>
    }>({exercises:[]})
    const [exercises,setExsercises]=useState<Array<string>>([
        "klata",
        "przysiad",
        "podciąganie"
    ])

    const saveHandler=()=>{
        console.log(trenig)
    }
    return(
        <div className="min-h-screen max-h-full bg-black text-white flex flex-col text-2xl space-y-9  items-center">

        <Input name="Podaj nazwę treningu"/>
        <DateInput/>
        <Textarea name="Podaj komentarz"/>    
        <PickList items={exercises} handler={setTrenig} trening={trenig}/>
        {trenig.exercises.map(x=><p key={x}>{x}</p>)}
        <button onClick={()=>saveHandler()} className="bg-orange-400 h-12 w-1/3 rounded-md">Zapisz</button>
        </div>
    )
}
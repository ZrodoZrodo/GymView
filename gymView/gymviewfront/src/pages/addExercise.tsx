import { useState } from "react"
import { Input } from "../components/input"
import { Textarea } from "../components/textarea"

export const AddExercise=()=>{

    const [exercise,setExercise]=useState<{

    }>({})

    return(
        <div className="min-h-screen max-h-full py-6 bg-black text-white flex flex-col text-2xl space-y-9 pt-16 items-center">
            <Input name="Podaj nazwe ćwiczenia"/>
            <Textarea name="Podaj opis"/>
    <button className="bg-orange-400 h-12 w-1/3 text-2xl rounded-md">Zapisz</button>
    </div>
    )
}
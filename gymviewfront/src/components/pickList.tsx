import { useState } from "react";
import { Input } from "./input";

export const PickList=({items,handler,trening}:{items:Array<string>,handler:React.Dispatch<React.SetStateAction<{
    exercises: Array<string>;
}>>,trening:{
    exercises: Array<string>;
}})=>{
    const [exerciseName,setExerciseName]=useState<string>("")
    const handleUpdateTraining=(item:string)=>{
        const exercises=trening.exercises;
        const index=exercises.indexOf(item)
        
        
        if(index===-1)
        {
            exercises.push(item)
        }
        else{
            exercises.splice(index,1)
        }
        trening.exercises=exercises
        console.log(trening)
        handler(trening)
    }

    return(
        <div className="w-2/3">
            <Input handler={setExerciseName} name="Wyszukaj ćwiczenie"/>
            {items.filter((item:string)=>item.includes(exerciseName)).map(item=><p key={item} className="flex justify-between w-full">
                {item} <input  type="checkbox" className="accent-pink-500" onClick={()=>handleUpdateTraining(item)}/>
            </p>)}
        </div>
    )
}
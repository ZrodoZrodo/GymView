import {useEffect, useState} from 'react'

export const HorizontalPicker=({ background, color, step, StateHandler, range }: {
    background: any;
    color: any;
    step: any;
    StateHandler: any;
    range: any;
})=>{
    
    const [value,setValue]=useState(range[0])
    const [SVGX,setSVGX]=useState<Array<string>>([])

    useEffect(()=>{
       
        const tab=new Set()
        const x=[]
        let a=0;
        for(let i=0;i<window.innerWidth*20;i+=0.1)
        {
          a=Math.round(((((i)/(window.innerWidth*19))*100)/(100/(range[1]-range[0]))+range[0])*(1/step))/(1/step)
            if(!tab.has(a))
            {
                tab.add(a)
                x.push(i.toFixed(1))
            }


        }

        setSVGX(x)
    },[window.innerWidth])


    return <div className={'scrollbar-hide'}  onScroll={(e)=>{StateHandler(Math.round(((((e.currentTarget.scrollLeft)/(window.innerWidth*19))*100)/(100/(range[1]-range[0]))+range[0])*(1/step))/(1/step));setValue(e.currentTarget.scrollLeft)}} style={{width:"100%",height:"140px",border:"1px solid black",overflow:'auto'}}>

    <div style={{width:window.innerWidth*20,height:"100%",border:"1px solid red",background}}>
        <svg width='100%' height='100'>
            {SVGX.map((x,index)=>
                (index+1)%4==0?<rect width="14" height="100" y={20} x={x} style={{fill:'rgb(0,0,255)',strokeWidth:'10',stroke:'rgb(0,0,0)'}} />:<rect width="14" height="40" y={40} x={x} style={{fill:'rgb(0,0,255)',strokeWidth:'10',stroke:'rgb(0,0,0)'}} />
            )}
            </svg>
    </div>

    <span style={{position:'absolute',left:window.innerWidth/2}}>{Math.round(((((value)/(window.innerWidth*19))*100)/(100/(range[1]-range[0]))+range[0])*(1/step))/(1/step)}</span>


    </div>

}

import { useEffect, useState } from "react"

export default function C1(){
    let [num,setNum]=useState(0);
    useEffect(()=>{
        let timer = setInterval(()=>{
            setNum(num+1)
        },1000)
        return ()=>{
            clearInterval(timer)
        }
    },[])
    return <h1 className="red">I am {num}</h1>
}
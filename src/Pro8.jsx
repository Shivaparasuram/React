import {useEffect , useState} from 'react'

const Pro8=()=>{

        const[name,setData]=useState("Bengaluru !x");

        useEffect(()=>{
                    if(name == "Bengaluru !x")
                        setData("Goa !x")
                    else
                        setData("Bombay !x")
                    },[])

    return (
            <h4>{name}</h4>
        )}

export default Pro8;
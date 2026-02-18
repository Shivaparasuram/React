import {useEffect , useState} from 'react'

const Pro8=()=>{

        const[name,setName]=useState("Bengaluru !x");

        useEffect(()=>{
                    if(name == "Bengaluru !x")
                        setName("Goa !x")
                    else
                        setName("Bombay !x")
                    },[])

    return (
            <h4>{name}</h4>
        )}

export default Pro8;
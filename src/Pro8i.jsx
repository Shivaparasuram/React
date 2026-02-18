import {useState} from 'react';
const Pro8i = () =>{
    const [num,setNum]=useState(0);

    const increment=()=>{
        setNum(num+1)
        }
    const decrement=()=>{
        if(num>0)
            setNum(num-1)
            }
        const clear=()=>{
            setNum(0)
                }

    return(
        <div>
            <h2>{num}</h2>
            <button onClick={increment}>+</button>
             <button onClick={decrement}>-</button>
              <button onClick={clear}>clear</button>
            </div>
        )
    }
export default Pro8i;
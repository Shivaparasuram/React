import {useState} from 'react';
import Pro5 from './Pro5.jsx';
import Pro6 from './Pro6.jsx';


let person ={
name1:"Scout !",
age:20,
spec:"M24 !"
}


let Employee ={
name:"Sam 1",
Branch :"AI",
Ex: 5
}


const Pro9=()=>{
    const[data , setData ] =useState(false);

    return(
        <div>
            {data ? <Pro5 name1= {person}/> : <Pro6 Em={Employee}/> }
        </div>

        );
    }

export default Pro9;


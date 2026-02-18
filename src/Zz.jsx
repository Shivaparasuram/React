import {useState,useEffect} from 'react';

const Zz=()=>{
    const[ScreenSize,setScreenSize]=useState({
            Height:window.innerHeight,
            Width:window.innerWidth
            })


       const update =()=>
       setScreenSize({
           Height:window.innerHeight,
           Width:window.innerWidth
           })

       useEffect(() => {
          window.addEventListener("resize", update);
          return () => window.removeEventListener("resize", update);
        }, []);


       return(
           <div>
           <h2>{ScreenSize.Height}</h2>
           <h2>{ScreenSize.Width}</h2>
           </div>
           )
    }

export default Zz
import {array1} from "./Pro12"

const Pro12i =()=>{
    return(
        <div>
                    {
                        array1.map((item)=>{
                            return(
                                <div>
                                   <h2>{item.name}</h2>
                                </div>
                               )
                        })
                    }

                    </div>

        )
    }
export default Pro12i
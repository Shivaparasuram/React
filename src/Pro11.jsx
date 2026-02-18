const  array =[46,64,"Dude!",{name:"Dynamo !",age:22}]

const Pro11 =()=>{
    return (
        <div>
            {
                array.map((item)=>{
                    return(
                        <div>
                            <h1></h1>
                            <h2>{item.name}</h2>
                            <h4>{item.age}</h4>
                        </div>
                       )
                })
            }

            </div>

        )
    }

export default Pro11;
import './App.css';
import Pro1 from './Pro1.jsx';
import Signup from'./Signup.jsx';   //calling function is component rendering
import Login from './Login.jsx';
import Pro3 from './Pro3.jsx';
import Pro4i from './Pro4i.jsx'
import Pro4ii from './Pro4ii.jsx'
import Pro5 from './Pro5.jsx'
import Pro5i from './Pro5i.jsx'
import Pro6 from './Pro6.jsx'
import Pro7 from './Pro7.jsx'
import Pro8 from './Pro8.jsx'
import Pro8i from './Pro8i.jsx'
import Pro9 from './Pro9.jsx'
import Pro10 from './Pro10.jsx'
import User from './User.jsx'
import Zz from './Zz.jsx'
import Pro11 from "./Pro11.jsx"
import Pro12i from "./Pro12i.jsx"
import Pro13 from "./Pro13.jsx"
import Pro14 from "./Pro14.jsx"
import Pro15 from "./Pro15.jsx"

// pro4i and pro4ii & Pro5

let person ={
name1:"Scout !",
age:20,
spec:"M24 !"

}


// pro6
let Employee ={
name:"Sam 1",
Branch :"AI",
Ex: 5
}


function App() {
  return (
    <div className="App">
      {/* <Pro1/> */}
      {/* <Login/>*/}
      {/* <Pro3/>*/}
      {/* <Pro4i name={person.name1}/> */}
      {/* <Pro4ii age={person.age}/> */}
      {/* <Pro5 obj = {person.spec}/> */}
      {/* <Pro5i obj1={person.name1}/> */}
      {/* <Pro6 Em={Employee}/>  */}
      {/* <Pro7/> */}
       {/*<Pro8/> */}
       {/* <Pro8i/> */}
      {/*<Pro9/> */}
      {/* <Pro10/> */}
      {/* <Zz/> */}
       {/* <Pro11/> */}
       {/* <Pro12i/> */}
       {/* <Pro13/> */}
       {/* <Pro14/> */}
       <Pro15/>




    </div>
  );
}

export default App;
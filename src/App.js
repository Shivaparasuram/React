import './App.css';
import Pro1 from './Pro1.jsx'
import Signup from'./Signup.jsx';   //calling function is component rendering
import Login from './Login.jsx';
import Pro3 from './Pro3.jsx';
import Pro4i from './Pro4i.jsx'
import Pro4ii from './Pro4ii.jsx'
import Pro5 from './Pro5.jsx'
import Pro6 from './Pro6.jsx'
import Pro7 from './Pro7.jsx'
import Pro8 from './Pro8.jsx'
import Pro9 from './Pro9.jsx'


// pro4i and pro4ii & Pro5

//let person ={
//name1:"Scout !",
//age:20,
//spec:"VV"
//}


// pro6
//let Employee ={
//name:"Sam 1",
//Branch :"AI",
//Ex: 5
//}


function App() {
  return (
    <div className="App">
      {/* <Pro1/> */}
      {/* <Login/>*/}
      {/* <Pro3/>*/}
      {/*<Pro4i name={person.name1}/> */}
      {/* <Pro4ii age={person.age}/> */}
      {/*  <Pro5 name1= {person}/>  */}
      {/* <Pro6 Em={Employee}/>  */}
      {/* <Pro7/> */}
       {/* <Pro8/> */}
       <Pro9/>
    </div>
  );
}

export default App;
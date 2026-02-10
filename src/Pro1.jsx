import Pro2 from './Pro2.jsx';

// Main Component
function Pro1() {
    return (
        <div> {/* Parent container */}
            <h2>Hello Guyss !!</h2> {/* Greeting */}
            <h2>This is REACT !!</h2> {/* Framework intro */}
            
            {/* Calling another component */}
            <C /> 
        </div>
    );
}

export default Pro1; // Function name and file name should match


// Arrow Function Component
const D = () => {
    return (
        <div>
            <h1>Arrow Function !!</h1>
        </div>
    );
};


// Named Function Component
const C = function A() {
    return (
        <div>
            <h5>Function TWO !!</h5>
            
            {/* Call Arrow Function */}
            <D />
            <Pro2/>
        </div>
    );
};
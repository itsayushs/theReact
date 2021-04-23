import React from 'react';

// File and Function name Caps.jsx
// This is a functional component we can also have a class based component
const Component1 = () => {
    return(
        // all the components are to enclosed inside div to avoid comteting against which one will become the parent component
        // div has a default css property display block to avoid this use we can use React.Fragment
        // <div>
        <React.Fragment>
            <p>This is a Component, an arrow function returning some HTML and exported.</p>
        </React.Fragment>
        // </div>
    )
}

// Import this in you main component .. in our case app 
export default Component1;
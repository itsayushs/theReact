// What is prop: Its a variable that we can pass to a component
import React from 'react';

// const PropsUse = (props) => {
    // we can use destrct the props object: 
    // const { name, variable2: lname } = props
    //              ^ this can be renamed .. lets say the value will be passed in variable2 we can use it as lname
    //              we can destruct it in the function call itself.
const PropsUse = ({name, variable2: lname}) => {
    return(
        <div>
            <h3>Hello user: {name} {lname}</h3>
        </div>
    )
}

export default PropsUse;
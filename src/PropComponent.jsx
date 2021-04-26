// What is prop: Its a variable that we can pass to a component
import React from 'react';

const PropsUse = (props) => {
    return(
        <div>
            <h3>Hello user: {props.name}</h3>
        </div>
    )
}

export default PropsUse;
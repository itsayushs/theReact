import React from 'react';

/*
For a page/component to refresh automatcally we use Hooks the help us update the state of the component!
useState is one such hook that will help us update the variable 
Whenever you call a function that is coming from a hook we change the state of the component/rerender it!
*/
const Counter = () =>{
    // let counter = 0;
    // const incrementFunc = () =>{
    //     counter++;
    // }

    let [counter, updateCounter]  = React.useState(0);
    //     ^var     ^func returned by hook           ^init val of var
    function incrementFunc() {
        updateCounter(counter+1)
        // updateCounter(counter=counter+1)
    }

    // function decrementFunc() {
    //     updateCounter(counter-1)
    // }
    return (
        <React.Fragment>
            The Count is: {counter}
            <button onClick={incrementFunc}>Increment</button>
            {/* using this "()" will not call the function <button onClick={incrementFunc()}>Increment</button> 
            This will basically call the function infinite number of time so we pass the refernce to the function we dont call that
            if we want to call a function then we can use " () => func() " an nameless arrow func
            lets call the updateCounter function created by the hook directlty in here! */}
            {/* <button onClick={decrementFunc}>Decrement</button> */}
            <button onClick={()=>updateCounter(counter-1)}>Decrement</button>
        </React.Fragment>
    )
}

export default Counter;
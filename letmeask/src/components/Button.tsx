import React, { useState } from 'react';

type ButtonProps = {
    text: string,
}

export const Button = (props: ButtonProps) => {

    
const [counter, setCounter] = useState(0);

 function increment () {
     setCounter(()=>{
         return counter + 1;
     }
     );
 }


    return (
        <button onClick={increment}>
            { counter }
        </button>
    )
}
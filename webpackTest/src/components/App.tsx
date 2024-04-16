import React, {useState} from 'react';
import './../styles.css'

export const App = () => {
    const [count , setCount] = useState<number>(0);

    const increment = () => setCount(prev => prev +1)


    return (
        <div>
            <h1>Hello world!</h1>
            <h1>{count}</h1>
            <button onClick={increment}>inc</button>
        </div>
    );
};

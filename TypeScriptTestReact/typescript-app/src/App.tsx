import React, {createElement as e, useEffect, useState} from 'react';
import Product from "./components/Product";
import {useProducts} from "./hooks/products";




function App() {
    const { loading, error, protucts } = useProducts()

    const [count, setCount] = useState(0)



  return (
      <div>
        <h1>Hello React</h1>
          <p>{count}</p>
        <button onClick={()=> setCount(count+1)}>+</button>
          <button onClick={()=> setCount(count-1)}>-</button>
          {loading &&<p>Loading...</p>}
          {error && <p>{error}</p>}
          {protucts?.map(protucts => <Product products={protucts} key={protucts.id}/>)}
          {/*<Product products ={ data }></Product>*/}
      </div>
  );
}

export default App;

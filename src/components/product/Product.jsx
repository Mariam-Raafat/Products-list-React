import React from 'react';
import './product.css';
import { useState } from 'react';
export const Product = ({product})=> {
    const [count, setCount] = useState(0);
    const increment = () => {
        if (count < product.stock) {
            setCount(count + 1);
        }
    };
    const decrement = ()=>{
        if (count >0) {
            setCount(count - 1);           
        }
    }
    return (
 <div className="card m-2 p-2 position-relative" style={{height: '30rem'}}>
  <img src={product.image} alt="Product image"/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
  </div>
   <div className="d-flex align-items-center position-absolute bottom-0  ">
      <button onClick={increment} className='btn btn-success me-2'>+</button>
        <span>{count}</span>
      <button onClick={decrement} className='btn btn-danger ms-2'>-</button> 
   </div>
</div>   
    );
}
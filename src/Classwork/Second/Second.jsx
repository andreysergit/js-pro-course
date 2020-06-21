import React, { useState } from "react";

export const SecondComponent = ({ counter, increment, decrement, plus, minus }) => {
  const [input, setInput] = useState();

  const onChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input type="number" value={input} onChange={onChange} />
      <button onClick={()=>(plus(input))}>Plus</button>
      <button onClick={()=>(minus(input))}>Minus</button>
      <button onClick={increment}>-</button>
      {counter}
      <button onClick={decrement}>+</button>
    </div>
  );
};

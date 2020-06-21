import React, { useState } from "react";

export const FirstComponent = ({ counterTwo, incrementtwo, decrementtwo, plustwo, minustwo }) => {
  const [input, setInput] = useState();

  const onChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <input type="number" value={input} onChange={onChange} />
      <button onClick={()=>(plustwo(input))}>Plus</button>
      <button onClick={()=>(minustwo(input))}>Minus</button>
      <button onClick={incrementtwo}>-</button>
      {counterTwo}
      <button onClick={decrementtwo}>+</button>
    </div>
  );
};
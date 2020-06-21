import React, { useState } from "react";
import "./style.css";
import styles from "./style.module.css";

export const TodoComponent = ({ delet, add, item, done }) => {
  const [input, setInput] = useState();

  const onChange = (event) => {
    setInput(event.target.value);
  };


  return (
    <>
      <div>
        <input type="text" value={input} onChange={onChange} />
        <button onClick={() => add(input), setInput('')} >Add Task</button>
      </div>
      <ul>
        {item.map((item) => {
          return (
            <li
              key={item.id}
              className={item.done ? styles.checked : "unchecked"}
            >
              <input
                type="checkbox"
                onChange={() => done(item.id)}
              />
              {item.task}
              <button onClick={() => delet(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

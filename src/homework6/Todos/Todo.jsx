import React, { useEffect } from 'react';
import { TodoList } from '../Components/TodoList';
import { AddTodo } from '../Components/TodoAdd';
import { SelectTab } from '../Components/SelectTab';


export const TodoComponent = ({ todos, addTodo, getTodos, setDone, tab, setTab }) => {
  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <>
      <header>ToDo List</header>
      <TodoList todos={todos} setDone={setDone} />
      <AddTodo addTodo={addTodo} />
      <SelectTab setTab={setTab} tab={tab} />
    </>
  );
};
import React from "react";
import { Todos } from "./Todos";
import { FormTodo } from "./FormTodo";

export class App extends React.Component {
  render() {
    return (
      <div className={"todo_block"}>
        <FormTodo submitAction={this.addItem} />
        <Todos />
      </div>
    );
  }
}

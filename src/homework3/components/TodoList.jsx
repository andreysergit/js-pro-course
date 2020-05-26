import React from "react";
import { FormTodo } from "./FormTodo";
import { ItemsList } from "./ItemsList";

export class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  addItem = (item) => {
    let newItems = this.state.items;
    newItems.push(item);
    this.setState({ items: newItems });
  };

  deleteItem = (id) => {
    let newItems = this.state.items;
    newItems.splice(id, 1);
    this.setState({ items: newItems });
  };

//   checkBox = (e) => {
//     const itemCheck = event.target;
//     if (item.classList[0] === "li_key") {
//       const todo = item.parentElement;
//       todo.classList.toggle("completed");
//     }
//   };

  render() {
    return (
      <>
          <FormTodo submitAction={this.addItem} />
          <ItemsList items={this.state.items} clickAction={this.deleteItem} />
      </>
    );
  }
}

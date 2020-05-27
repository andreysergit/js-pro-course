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

  render() {
    return (
      <>
          <FormTodo submitAction={this.addItem} />
          <ItemsList items={this.state.items} clickAction={this.deleteItem} />
      </>
    );
  }
}

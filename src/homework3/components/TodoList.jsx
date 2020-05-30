import React from "react";
import { toggleDone, toggleRemove, getNewId } from "../utils";
import { AddItem } from "../components/AddItem";
import { Menu } from "../components/Menu";
import { RenderList } from "../routing/RenderList";

export class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 0, name: "Купить молоко", done: false, active: true },
        { id: 1, name: "Купить хлеб", done: true, active: true },
        { id: 2, name: "Купить масло", done: false, active: false }
      ]
    };
  }

  handleDone = id => {
    this.setState(oldState => ({ list: toggleDone(oldState.list, id) }));
  };

  handleRemove = id => {
    this.setState(oldState => ({ list: toggleRemove(oldState.list, id) }));
  };

  handleAdd = name => {
    this.setState(state => {
      const newId = getNewId(state.list);
      const newTask = { id: newId, name, done: false, active: true };
      return { list: [...state.list, newTask] };
    });
  };

  render() {
    return (
      <>
        <Menu />
        <RenderList
          items={this.state.list}
          onDone={this.handleDone}
          onRemove={this.handleRemove}
        />
          <AddItem onAdd={this.handleAdd}/>
      </>
    );
  }
}

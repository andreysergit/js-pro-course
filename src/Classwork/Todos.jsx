import React from 'react';
import { Item } from './TodoItem';

export class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 0, name: 'Купить молоко', done: false, active: true },
        { id: 1, name: 'Купить хлеб', done: true, active: true },
        { id: 2, name: 'Купить масло', done: false, active: false },
      ],
    };
  }

  handleDone = (id) => {
    this.setState((oldState) => {
      return { ...oldState, list: oldState.list.map((el) => (el.id === id ? { ...el, done: !el.done } : el)) };
    });
  };

//   onRemove = (id) => {
//     this.setState((removeState) => {
//       return { ...removeState, list: removeState.list.map((el) => (el.id === id ? { ...el, done: !el.done } : el)) };
//     });
//   };

  addItem = (item)=>{
    let newList = this.state.list;
    console.log(newList)
    newList.push(item);
    this.setState({list: newList})
}

  render() {
    let listItems = this.state.list.map((element, i) => {
      return (
        <Item
          key={element.id}
          checked={element.done}
          name={element.name}
          onDone={this.handleDone}
          id={element.id}
        ></Item>
      );
    });

    return <ul>{listItems}</ul>;
  }
}


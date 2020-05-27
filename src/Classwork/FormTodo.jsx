import React from "react";
import { Input } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export class FormTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  updateItem = (event) => {
    this.setState({ task: event.target.value });
  };
  onSubmit = (event) => {
    event.preventDefault();
    let item = event.target[0].value;
    console.log(item)
    this.props.SubmitAction(item)
    this.setState({task: ""});
  };

  render() {
    return (
      <form className="form_add" onSubmit={this.onSubmit}>
        <Input onChange={this.updateItem} value={this.state.task}/>
        <button className="add_btn">
          <PlusOutlined />
        </button>
      </form>
    );
  }
}

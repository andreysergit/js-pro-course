import React from "react";
import { Input} from "antd";
import { PlusOutlined} from "@ant-design/icons";

export class FormTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  updateItem = (e) => {
    this.setState({ task: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let item = e.target[0].value;
    this.props.submitAction(item);
    this.setState({ task: "" });
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit} className="form_add">
          <Input
            value={this.state.task}
            onChange={this.updateItem}
            placeholder="Enter task"
            type="usage"
          />
          <button className="add_btn">
            <PlusOutlined />
          </button>
        </form>
      </>
    );
  }
}

import React from "react";
import {DeleteOutlined } from "@ant-design/icons";
import {Button, Checkbox } from "antd";

export class ItemsList extends React.Component {
  render() {
    let listItems = this.props.items.map((item, i) => {
      return (
        <li key={i} className="li_key link_item">
          <Checkbox />
          <div>{item}</div>
          <Button type="primary" onClick={this.props.clickAction.bind(this, i)}>
            <DeleteOutlined />
          </Button>
        </li>
      );
    });
    return <ul>{listItems}</ul>;
  }
}

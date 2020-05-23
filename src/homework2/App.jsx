import React from "react";
import './App.module.css';
import { Button } from "antd";
import "antd/dist/antd.css";
import { PlusOutlined, RedoOutlined, MinusOutlined } from "@ant-design/icons";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }

  PlusClicker() {
    this.setState((oldState) => ({ number: this.state.number + 1 }));
  }

  ReloadClicker() {
    this.setState({
      number: 0,
    });
  }

  MinusCLicker() {
    this.setState((oldState) => ({ number: this.state.number - 1 }));
  }

  render() {
    return (
      <>
        <div className="block_wrapper">
          <div className="result_block">{this.state.number}</div>
          <div className="btn_block">
            <Button onClick={() => this.PlusClicker()} className="btn_plus" type="primary">
              <PlusOutlined style={{fontsize:"36px", color:"#1a1714"}} />
            </Button>
            <Button onClick={() => this.ReloadClicker()} className="btn_reload" type="primary">
              <RedoOutlined style={{fontsize:"36px", color:"#1a1714"}} />
            </Button>
            <Button onClick={() => this.MinusCLicker()} className="btn_minus" type="primary">
              <MinusOutlined style={{fontsize:"36px", color:"#1a1714"}} />
            </Button>
          </div>
        </div>
      </>
    );
  }
}

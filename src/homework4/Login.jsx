import React from "react";
import Style from "./style.module.css";
import Form from "antd/lib/form/Form";
import { Input, Button } from "antd";
import { Link} from "react-router-dom";

export const Login= () => {

  return (
      <Form id="basic">
        <div className="input_block_form">
          <p>Username:</p>
          <Input type="usage" placeholder="Username" />
        </div>
        <div className="input_block_form">
          <p>Password:</p>
          <Input type="basic" type="password" placeholder="Password" />
        </div>
        <div className="btn_block">
          <Button type="submit" type="primary">
            Submit
          </Button>
          <Button type="primary">
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </Form>
  );
};

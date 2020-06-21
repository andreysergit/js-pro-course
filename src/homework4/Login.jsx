import React, {useState} from "react";
import Style from "./style.module.css";
import Form from "antd/lib/form/Form";
import { Input, Button } from "antd";
import { Link} from "react-router-dom";

export const Login= ({user, checkUser}) => {

    const [userLogin, userLoginState] = useState("");
    const [userPassword, userPasswordState] = useState("");


  return (
      <div id="basic">
        <div className="input_block_form">
          <label htmlFor="">Username:</label>
          <Input type="usage" placeholder="Username" onChange={(event)=>userLoginState(event.target.value)} value={userLogin} />
        </div>
        <div className="input_block_form">
          <label htmlFor="">Password:</label>
          <Input type="basic" type="password" placeholder="Password" onChange={(event)=>userPasswordState(event.target.value)} value={userPassword} />
        </div>
        <div className="btn_block">
          <Button type="submit" type="primary" onClick={()=>checkUser({userLogin, userPassword})}>
          <Link to="/home">Submit</Link>
          </Button>
          <Button type="primary">
            <Link to="/register">Register</Link>
          </Button>
        </div>
      </div>
  );
};

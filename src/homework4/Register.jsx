import React, { useState } from "react";
import { Input, Button } from "antd";
import { Link } from "react-router-dom";

export const Register = (props) => {
  // const usersData = [
  //   { id: 1, name: "Andrey", otherFields: "hello" },
  //   { id: 1, name: "Petr", otherFields: "world" },
  //   { id: 1, name: "Sergey", otherFields: ":)" },
  // ];

  const [users, usersState] = useState([
    { id: 1, name: "Andrey", otherFields: "hello" },
    { id: 2, name: "Petr", otherFields: "world" },
    { id: 3, name: "Sergey", otherFields: ":)" },
  ]);

  let [titleUsers, titleUsersState] = useState("");
  let [titleOther, titleOtherState] = useState("");

  const addUsersData = (event) => {
    if ((titleUsers.length === 0) & (titleOther.length === 0)) {
      alert("Enter data");
    } else {
      usersState([
        ...users,
        { id: Date.now(), name: titleUsers, otherFields: titleOther },
      ]);
    }
    titleUsersState("");
    titleOtherState("");
  };

  return (
    <form>
      <label>
        <div className="input_block_form">
          <p>Username:</p>
          <Input
            type="usage"
            placeholder="Username"
            value={titleUsers}
            onChange={(event) => titleUsersState(event.target.value)
            }
          />
        </div>
        <div className="input_block_form">
          <p>Password:</p>
          <Input type="usage" type="password" placeholder="Password" />
        </div>
        <div className="input_block_form">
          <p>Other fields:</p>
          <Input
            type="usage"
            value={titleOther}
            onChange={(event) => titleOtherState(event.target.value)}
          />
        </div>
      </label>
      <div className="btn_block">
        <Button onClick={addUsersData} type="primary">
          Register
        </Button>
        <Button type="primary">
          <Link to="/login">Exit</Link>
        </Button>
      </div>
    </form>
  );
};

import React, { useState, useEffect } from "react";
import { Login } from "./Login";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Register } from "./Register";
import { Users } from "./Users";
// import data from './user.json'
import { Button } from "antd";
import { Header } from "./Header";
import { Home } from "./Home";

export const App = () => {
  const [users, usersState] = useState([]);
  const [user, userState] = useState();

  const addUsersData = () => {
    usersState([...users, users[0]]);
  };

  const checkUser = (user) => {
    const userIs = users.find((next) => {
      return next.login === user.userLogin && next.pass === user.userPassword
      });
      if(userIs){
        userState(userIs)
      }else alert('error')
    };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:3004/users");
      const data = await response.json();
      usersState(data);
    };
    getData();
  }, []);

  const onUser= () => userState(null)

  return (
    <BrowserRouter>
      <Switch>
    <Route render={()=><Login checkUser={checkUser}></Login>} path="/login" >
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Redirect to="/login" />
        <Route path='/home' render={()=><Home users={users} user={user} onUser={onUser}></Home>}></Route>
      </Switch>
      <Header user={user} />
      <Users users={users} />
      <Button onClick={addUsersData}>Click</Button>
    </BrowserRouter>
  );
};

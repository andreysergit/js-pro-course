import React from "react";

export const Users = (props) => {
  const {users} = props;

// const child = [
// <li>{users[0].login}</li>,
// <li>{users[1].login}</li>,

// ]

  return(
    <ul>
    {  users.map((users) => {
      return(
      <li key={users.id}>id:{users.id}, login:{users.login}, Others:{users.other},pass:{users.pass}</li>
    )
    })
    }
  </ul>
  ) 
  // <ul>{child}</ul>
};

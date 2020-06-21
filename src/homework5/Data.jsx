import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export const Data = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const responce = await fetch(
        "https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats"
      );
      const newData = await responce.json();
      setData(newData);
    };
    getData();
  }, []);

  const valueRow = [];
  const valueCell = [];

  const eachData = (obj) => {
    for (const key in obj.data) {
      valueRow.push(key);
    }
  };

  const eachDataB = (obj) => {
    for (const key in obj.data) {
      valueCell.push(obj.data[key]);
    }
  };

  return (
    <>
      {eachData(data)}
      {eachDataB(data)}

      <table border="1" cellspacing="0">
        <tr>
          {valueRow.map((value) => {
            return <td>{value.replace(/_/g, " ")}</td>;
          })}
        </tr>
        <tr>
          {valueCell.map((value) => {
            return <td>{value}</td>;
          })}
        </tr>
      </table>
    </>
  );
};

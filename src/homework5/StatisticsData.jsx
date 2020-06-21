import React, { useState, useEffect } from "react";
// import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export const StatisticsData = () => {
  const [Statistic, setStatistic] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const responce = await fetch(
        "https://corona-virus-stats.herokuapp.com/api/v1/cases/countries-search"
      );
      const newData = await responce.json();
      setStatistic(newData);
    };
    getData();
  }, []);

  const valueStat = [];
    const valueCell = [];

  const eachStat = (obj) => {
    for (const key in obj.data) {
        // valueStat.push(obj.data[key]);
        console.log(obj.data[key])
    }
  };

  return (
    <>
      {eachStat(Statistic)}
      <div>
        {/* {valueStat.map((value) => {
          return <li>{value}</li>;
        })} */}
      </div>
    </>
  );
};

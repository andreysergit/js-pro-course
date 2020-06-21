import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {Data} from './Data'
import { StatisticsData } from "./StatisticsData";

export const App = () => {

  return (
      <>
    <Data />,
    <StatisticsData />
    </>
  );
};

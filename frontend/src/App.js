import './App.css';
import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import axios from "axios";
import Home from './components/Home';
import {API_URL} from './config'

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    axios.get(`${API_URL}/products`, { withCredentials: true })
    .then((response) => {
      console.log(response.data)
      setItems(response.data)
    })
    .catch((err) => {
      console.log('this is error: ', err)
    })
  }, [])

  return (
    <div className="App">
        <h1>Lovro here</h1>
        <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home items={items} />;
          }}
        />
        </Switch>
    </div>
  );
}

export default withRouter(App);
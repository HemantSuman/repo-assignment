import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import {Layout, Product} from './components';
import {MyProvider} from './context/MyContext'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MyProvider>
        <Layout>
          <Switch>
            <Route path="/" component={Product} />
          </Switch>
        </Layout>
      </MyProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import App from './App';

const Router = () => {
  return (
    <BrowserRouter>
      <div className="routes">
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" exact strict component={App} />
      </div>
    </BrowserRouter>
  );
}

export default Router;

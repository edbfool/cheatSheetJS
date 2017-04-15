import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

import Main from './main';

render(
  (<BrowserRouter hsitory={history}>
      <Route component={Main}/>
  </BrowserRouter>),

  document.getElementById('mount')
);

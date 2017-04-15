import React from "react";
import {render} from "react-dom";
import {BrowserRouter, Route} from 'react-router-dom';

import Main from './main';

render(
  (<BrowserRouter>
      <Route component={Main}/>
  </BrowserRouter>),

  document.getElementById('mount')
);

import {Component} from 'react';
import {Route} from 'react-router-dom';

import Home from './home';
import About from './about';
import Sheet from './sheet';

export default class Main extends Component {
  render(){
    return(
      <div>
        <div id="nav">
          <div>
            <a id="home_link" href="/">CheatSheetJS</a>
          </div>
          <div>
            <ul>
              <li><a href="/index">Index</a></li>
              <li><a href="/about">About us</a></li>
            </ul>
          </div>
        </div>
        <div id="container">
          <Route exact path="/" component={Home}/>
          <Route path="/index" component={Sheet}/>
          <Route path="/about" component={About} />
        </div>
      </div>
    );
  }
}

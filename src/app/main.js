import {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import style from './main.css';

import Home from './home';
import About from './about';
import Sheet from './sheet';

export default class Main extends Component {
  render(){
    return(
      <div>
        <div id="nav">
          <div>
            <NavLink activeClassName={style.active} exact id="home_link" to="/">CheatSheetJS</NavLink>
          </div>
          <div>
            <ul>
              <li><NavLink activeClassName={style.active} to="/index">Index</NavLink></li>
              <li><NavLink activeClassName={style.active} to="/about">About us</NavLink></li>
            </ul>
          </div>
        </div>
        <div id="container">
          <Route exact path="/" component={Home}/>
          <Route path="/index" component={Sheet}/>
          <Route path="/about" component={About}/>
        </div>
      </div>
    );
  }
}

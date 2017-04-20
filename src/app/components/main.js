import {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import style from './main.css';

import Home from './pages/home';
import About from './pages/about';
import Sheet from './pages/sheet';
import Users from './pages/Users';

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
              <li><NavLink activeClassName={style.active} to="/sheets">Sheets</NavLink></li>
              <li><NavLink activeClassName={style.active} to="/users">Users</NavLink></li>
              <li><NavLink activeClassName={style.active} to="/about">About us</NavLink></li>
            </ul>
          </div>
        </div>
        <div id="container">
          <Route exact path="/" component={Home}/>
          <Route path="/sheets" component={Sheet}/>
          <Route path="/users" component={Users}/>
          <Route path="/about" component={About}/>
        </div>
      </div>
    );
  }
}

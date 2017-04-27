import {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';
import style from './main.css';

import Home from './pages/Home';
import About from './pages/About';
import Sheet from './pages/Sheet';
import Users from './pages/Users';
import Pics from './pages/Pics';

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
              <li><NavLink activeClassName={style.active} to="/pics">Pics</NavLink></li>
            </ul>
          </div>
        </div>
        <div id="container">
          <Route exact path="/" component={Home}/>
          <Route path="/sheets" component={Sheet}/>
          <Route path="/users" component={Users}/>
          <Route path="/about" component={About}/>
          <Route path="/pics" component={Pics}/>
        </div>
      </div>
    );
  }
}

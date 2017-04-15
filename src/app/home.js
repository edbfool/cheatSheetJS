import {Component} from 'react';
import style from './home.css';

export default class Home extends Component {
  render(){
    return(
      <div className={style.derp}>
        <h1 className={style.title}>Home Page</h1>
      </div>
    );
  }
}

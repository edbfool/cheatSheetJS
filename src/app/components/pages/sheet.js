import {Component} from 'react';
import style from './Sheet.css';

export default class Sheet extends Component {
  render(){
    return(
      <div className={style.derp}>
        <h1 className={style.title}>Sheet Page</h1>
      </div>
    );
  }
}

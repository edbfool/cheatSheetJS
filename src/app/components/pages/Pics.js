import { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Pics.css';

import {fetchData} from '../../../store/reducers/actions'

class Pics extends Component {
  componentWillMount(){
    this.props.fetchImage();
  }

  renderPictures(){
    let onHover = () => {
      console.log('over');
    }
    return this.props.pics.map((item,index)=>{
      return <div key={index} className={styles.pictures} onMouseOver={()=> onHover()}><img src={item.thumbnailUrl}/></div>
    })
  }

  render(){
    return (
      <div className={styles.derp}>
        {this.renderPictures()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pics: state.fetchedPictures
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchImage: ()=>{
      dispatch(fetchData(ownProps.location.pathname, 'photos'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pics);

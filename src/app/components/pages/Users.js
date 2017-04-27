import {Component} from 'react';
import { connect } from 'react-redux'
import styles from './Users.css';

import {fetchData} from '../../../store/reducers/actions'

class Users extends Component {
    componentWillMount() {
        const {dispatch} = this.props
        dispatch(fetchData(this.props.location.pathname, 'users'))
    }

    render(){
        let {users} = this.props
        console.log(this.props);
        return(
            <div className={styles.derp}>
                <h1 className={styles.title}>Users Page</h1>
                {
                    users.map((user, i) => {
                        return <div className={styles.item} key={i}>
                            <div><span>Name:</span> <span>{user.name}</span></div>
                            <div><span>Username:</span> <span>{user.username}</span></div>
                            <div><span>Email:</span> <span>{user.email}</span></div>
                        </div>
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.fetchedUsers
    }
};

export default connect(mapStateToProps)(Users)

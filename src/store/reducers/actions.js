import axios from 'axios'
import _ from 'lodash'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const RECEIVE_PICTURE = 'RECEIVE_PICTURE'
export const HOVERED_ELEMENT = 'HOVERED_ELEMENT'

export function fetchData (route, type) {
    return dispatch => {
        axios.get(`https://jsonplaceholder.typicode.com/${type}`)
            .then((data) => {
            //console.log(data)
                dispatch(receiveData(route, type,  _.values(data.data)))
            })
    }
}

function receiveData (route, type, data) {
  switch(type){
    case 'users':
      return {
        type: RECEIVE_USERS,
        payload: data,
        last_updated: Date.now()
      }
    case 'photos':
      return {
        type: RECEIVE_PICTURE,
        payload: data,
        last_updated: Date.now()
      }
  }
}

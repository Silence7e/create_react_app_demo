/**
 * Created by robin on 17/10/5.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
export default combineReducers({
  routing: routerReducer,
  counter
})
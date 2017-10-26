/**
 * Created by Silence on 2017/10/26.
 */
import {handleActions} from 'redux-actions'
import types from '../actions/counter'
export default  handleActions({
    [types.COUNTER_INCREMENT]: (state, action) => ({
        ...state,
        count: state.count + 1,
    }),
    [types.COUNTER_DECREMENT]: (state, action) => ({
        ...state,
        count: state.count - 1,
    }),
}, {
    count: 0,
    isIncrementing: false,
    isDecrementing: false
})
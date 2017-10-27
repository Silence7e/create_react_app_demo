/**
 * Created by Silence on 2017/10/26.
 */
import {handleActions} from 'redux-actions'
import types from '../actions/counter'
import appTypes from '../actions/app'

export default handleActions({
    [appTypes.APP_ROUTE_CHANGE]: (state, action) => ({
        ...state,
        initData: action.payload.result
    }),
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
    initData: false,
    isIncrementing: false,
    isDecrementing: false,
})
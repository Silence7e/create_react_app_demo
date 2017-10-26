/**
 * Created by Silence on 2017/10/26.
 */

import types from '../actions/user'
import {handleActions} from 'redux-actions'

export default handleActions({
    [types.USER_LOAD_DATA]:(state, action)=> ({
        ...state,
        ...action.payload
    }),
    [types.USER_LOGOUT_FINISH]: (state, action) => ({
        isLoginEnable: false,
        isLoginProcessing: false
    }),
},{})
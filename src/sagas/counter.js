/**
 * Created by Silence on 2017/10/26.
 */
import types, {
    COUNTER_DECREMENT,
    COUNTER_INCREMENT,
    COUNTER_INCREMENT_ASYNC,
} from '../actions/counter';
import {take, call, put, fork} from 'redux-saga/effects';
import {delay}  from 'redux-saga'

//export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
export default  function *() {
    while (true) {
        const action = yield  take([COUNTER_INCREMENT_ASYNC, types.COUNTER_DECREMENT_ASYNC]);
        console.log(action);
        yield call(delay, 1000);
        yield fork(delay, 2000);
        if (action.type === types.COUNTER_INCREMENT_ASYNC) {
            yield put(COUNTER_INCREMENT({from: 'async'}))
        } else {
            yield put(COUNTER_DECREMENT({from: 'async'}))
        }
    }
}
/**
 * Created by Silence on 2017/10/26.
 */
import {takeEvery, call} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import types, {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_PROCESSING,
    USER_LOAD_DATA,
} from '../actions/user';

export default function*() {
    yield takeEvery([USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_PROCESSING, USER_LOAD_DATA], function*({type, payload}) {
        yield call(delay, 100);
        switch (type) {
            case types.USER_LOGIN_REQUEST:
                break;
            case types.USER_LOGIN_SUCCESS:
                break;
            case type.USER_LOGIN_PROCESSING:
                break;
            default:
                break;
        }
    });
}
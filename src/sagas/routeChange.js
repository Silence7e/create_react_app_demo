/**
 * Created by robin on 2017/10/27.
 */

import {take, call, put} from 'redux-saga/effects';
import {LOCATION_CHANGE} from 'react-router-redux/reducer';
import {delay} from 'redux-saga'
import {APP_ROUTE_CHANGE} from '../actions/app'

function routeChange(route) {
    if (!route) {
        return null;
    }
    return {
        func: delay,
        args: [2000]
    }
}

export default function* () {
    while (true) {
        const action = yield take(LOCATION_CHANGE);
        const payload = routeChange(action.payload);
        if (payload) {
            const result = yield call(payload.func, ...payload.args);
            yield put(APP_ROUTE_CHANGE({result}));
        }
    }
}
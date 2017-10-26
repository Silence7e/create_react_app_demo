/**
 * Created by Silence on 2017/10/26.
 */


import {all, call, take, fork, put, cancel} from "redux-saga/effects";
import types from '../actions/app';
//import {USER_LOAD_DATA} from '../actions/user';
//import runService from "./runService;
//import routeChange from "./routeChange";
import userService from "./userService";
import counter from './counter'


function main (sagas, initializer, ...args) {
    return function* () {
        //yield take(types.APP_INIT);
        const task = yield fork(function* () {
            yield all(sagas.map(s => fork(s)));
        });

        yield put(({type: types.APP_START}));

        if (initializer) {
            if (args && args.length) {
                yield call(initializer, ...args);
            } else {
                yield call(initializer);
            }
        }

        yield take(types.APP_EXIT);
        cancel(task);
    };
}
const sagas = [
    userService,
    counter
];
export default main(sagas);
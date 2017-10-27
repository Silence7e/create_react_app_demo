/**
 * Created by Silence on 2017/10/26.
 */
import createAction from './createAction';

const types = {
    'USER_LOAD_DATA': 'USER_LOAD_DATA',
    'USER_LOGIN_REQUEST': 'USER_LOGIN_REQUEST',
    'USER_LOGIN_ENABLE': 'USER_LOGIN_ENABLE',
    "USER_LOGIN_PROCESSING": 'USER_LOGIN_PROCESSING',
    'USER_LOGIN_SUCCESS': 'USER_LOGIN_SUCCESS',
    'USER_LOGIN_FAILURE': 'USER_LOGIN_FAILURE',
    'USER_LOGOUT_REQUEST': 'USER_LOGOUT_REQUEST',
    'USER_LOGOUT_FINISH': 'USER_LOGOUT_FINISH'
};

export const USER_LOAD_DATA = createAction(types.USER_LOAD_DATA);
export const USER_LOGIN_REQUEST = createAction(types.USER_LOGIN_REQUEST);
export const USER_LOGIN_ENABLE = createAction(types.USER_LOGIN_ENABLE);
export const USER_LOGIN_PROCESSING = createAction(types.USER_LOGIN_PROCESSING);
export const USER_LOGIN_SUCCESS = createAction(types.USER_LOGIN_SUCCESS);
export const USER_LOGIN_FAILURE = createAction(types.USER_LOGIN_FAILURE);
export const USER_LOGOUT_REQUEST = createAction(types.USER_LOGOUT_REQUEST);
export const USER_LOGOUT_FINISH = createAction(types.USER_LOGOUT_FINISH);

export default types;
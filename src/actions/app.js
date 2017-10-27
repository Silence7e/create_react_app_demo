/**
 * Created by Silence on 2017/10/26.
 */
import createAction from "./createAction";

const types = {
    'APP_INIT': 'APP_INIT',
    'APP_START': 'APP_START',
    'APP_EXIT': 'APP_EXIT',

    // api begin
    'APP_API_REQUEST': 'APP_API_REQUEST',
    'APP_API_SUCCESS': 'APP_API_SUCCESS',
    'APP_API_FAILURE': 'APP_API_FAILURE',
    'APP_API_CANCEL': 'APP_API_CANCEL',
    // api end

    'APP_SCREEN_CHANGE': 'APP_SCREEN_CHANGE',
    'APP_ROUTE_REDIRECT': 'APP_ROUTE_REDIRECT',
    'APP_ROUTE_CHANGE': 'APP_ROUTE_CHANGE',

    // page begin
    'APP_PAGE_START': 'APP_PAGE_START', // give the chance for the page reducer to create the entry
    'APP_PAGE_END': 'APP_PAGE_END',
    // page end

    // service begin
    'APP_SERVICE_START': 'APP_SERVICE_START',
    'APP_SERVICE_DONE': 'APP_SERVICE_DONE',
    'APP_SERVICE_ERROR': 'APP_SERVICE_ERROR',
    'APP_SERVICE_CANCEL': 'APP_SERVICE_CANCEL',

    'PREPARE_LOADING': 'PREPARE_LOADING',
    'START_LOADING': 'START_LOADING',
    'END_LOADING': 'END_LOADING',
    // service end

    // lock
    'APP_LOCK': 'APP_LOCK',
    'APP_UNLOCK': 'APP_UNLOCK',
    // unlock
};

export const APP_INIT = createAction(types.APP_INIT);
export const APP_START = createAction(types.APP_START);
export const APP_EXIT = createAction(types.APP_EXIT);

// api begin
export const APP_API_REQUEST = createAction(types.APP_API_REQUEST);
export const APP_API_SUCCESS = createAction(types.APP_API_SUCCESS);
export const APP_API_FAILURE = createAction(types.APP_API_FAILURE);
export const APP_API_CANCEL = createAction(types.APP_API_CANCEL);
// api end

export const APP_SCREEN_CHANGE = createAction(types.APP_SCREEN_CHANGE);
export const APP_ROUTE_REDIRECT = createAction(types.APP_ROUTE_REDIRECT);
export const APP_ROUTE_CHANGE = createAction(types.APP_ROUTE_CHANGE);

// page begin
export const APP_PAGE_START = createAction(types.APP_PAGE_START);
export const APP_PAGE_END = createAction(types.APP_PAGE_END);
// page end

// service begin
export const APP_SERVICE_START = createAction(types.APP_SERVICE_START);
export const APP_SERVICE_DONE = createAction(types.APP_SERVICE_DONE);
export const APP_SERVICE_CANCEL = createAction(types.APP_SERVICE_CANCEL);
export const APP_SERVICE_ERROR = createAction(types.APP_SERVICE_ERROR);

export const PREPARE_LOADING = createAction(types.PREPARE_LOADING);
export const START_LOADING = createAction(types.START_LOADING);
export const END_LOADING = createAction(types.END_LOADING);
// service end

// lock begin
export const APP_LOCK = createAction(types.APP_LOCK);
export const APP_UNLOCK = createAction(types.APP_UNLOCK);
// lock end

export default types;


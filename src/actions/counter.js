/**
 * Created by Silence on 2017/10/26.
 */
import createAction from './createAction';

const types = {
    'COUNTER_INCREMENT': 'COUNTER_INCREMENT',
    'COUNTER_INCREMENT_ASYNC': 'COUNTER_INCREMENT_ASYNC',
    'COUNTER_DECREMENT': 'COUNTER_DECREMENT',
    'COUNTER_DECREMENT_ASYNC': 'COUNTER_DECREMENT_ASYNC'
};

export const COUNTER_INCREMENT = createAction(types.COUNTER_INCREMENT);
export const COUNTER_INCREMENT_ASYNC = createAction(types.COUNTER_INCREMENT_ASYNC);
export const COUNTER_DECREMENT = createAction(types.COUNTER_DECREMENT);
export const COUNTER_DECREMENT_ASYNC = createAction(types.COUNTER_DECREMENT_ASYNC);

export default types;
/**
 * Created by Silence on 2017/10/26.
 */
import { createAction } from 'redux-actions';

export default (type) => {
    return createAction(type, (payload) => payload, (payload, meta) => meta);
}
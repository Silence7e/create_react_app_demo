/**
 * Created by robin on 17/10/5.
 */
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
    COUNTER_INCREMENT,
    COUNTER_DECREMENT,
    COUNTER_INCREMENT_ASYNC,
    COUNTER_DECREMENT_ASYNC
} from '../../actions/counter';
import Home from '../../components/Home';

const mapStateToProps = state => ({
    count: state.counter.count,
    isIncrementing: state.counter.isIncrementing,
    isDecrementing: state.counter.isDecrementing
});


// const mapDispatchToProps = dispatch =>{
//     return{
//         decrement:()=>{
//             dispatch(COUNTER_DECREMENT({name:'foo'}));
//         },
//         increment: ()=>{
//             dispatch(COUNTER_INCREMENT({name:'foo'}));
//         },
//         incrementAsync: ()=>{
//             dispatch(COUNTER_INCREMENT_ASYNC({name: 'foo'}))
//         },
//         changePage: () => {
//             dispatch(push('/about-us'))
//         }
//     }
// };
/*这里可以使用上下两种形式，感觉下面这种更简洁一点*/
function increment(text) {
    return COUNTER_INCREMENT({name: text})
}

const decrement = () => {
    return COUNTER_DECREMENT({
        payload: {"name": 'foo'}
    });
};
const incrementAsync = () => {
    return COUNTER_INCREMENT_ASYNC({});
};
const decrementAsync = () => {
    return COUNTER_DECREMENT_ASYNC({});
};
const mapDispatchToProps = dispatch => bindActionCreators({
    decrement,
    increment,
    incrementAsync,
    decrementAsync,
    changePage: () => push('/about-us')
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Home);
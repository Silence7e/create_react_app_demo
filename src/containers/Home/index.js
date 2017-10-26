/**
 * Created by robin on 17/10/5.
 */
import React from 'react';
import {push} from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {COUNTER_INCREMENT, COUNTER_DECREMENT, COUNTER_INCREMENT_ASYNC, COUNTER_DECREMENT_ASYNC} from '../../actions/counter'

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.count}</p>

    <p>
      <button onClick={props.increment} disabled={props.isIncrementing}>Increment</button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>Increment Async</button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>Decrement</button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>Decrement Async</button>
    </p>

    <p><button onClick={() => props.changePage()}>Go to about page via redux</button></p>
  </div>
)

const mapStateToProps = state=>({
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
function increment(text){
    return COUNTER_INCREMENT({name:text})
}
const decrement = () => {
    return COUNTER_DECREMENT({
            payload:{"name":'foo'}
        });
};
const incrementAsync = ()=>{
    return COUNTER_INCREMENT_ASYNC({});
};
const decrementAsync = ()=>{
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
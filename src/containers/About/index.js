/**
 * Created by robin on 17/10/5.
 */

import React,{Component} from 'react'
import {Link, Route} from 'react-router-dom'

// const About = () => (
//   <div>
//     <h1>About Page</h1>
//     <p>Did you get here via Redux?</p>
//   </div>
// )
const Us = ()=>(
    <div>关于我们</div>
);
const Other = ()=>(<div>其他</div>);


export default class About extends Component{
    render(){
        return (
            <div>
                <div>关于： 请选择</div>
            <Link style={{margin:'0 20px 0 0'}} to="/about-us/us">我们</Link>
            <Link to="/about-us/other">其他</Link>
            <div>
                <Route path="/about-us/us" component={Us}/>
                <Route path="/about-us/other" component={Other}/>
            </div>
            </div>)
    }
}
/**
 * USER
 * Created by samli on 01/09/2017.
 */
import React, { Component } from 'react';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom'
import Home from './component/index/index.jsx';
import Pay from './component/pay/index.jsx';

export default class App extends Component{
	componentWillReceiveProps(nextProps){
		console.log(nextProps);
		//当路由切换时
		if(this.props.location !== nextProps.location){
			window.scrollTo(0,0)
		}
	}
	render(){
		return (
				<Router>
					<div className="page">
							<Switch>
								<Route exact path="/" component={Home}/>
								<Route path="/pay" component={Pay}/>
							</Switch>
					</div>
				</Router>
		)
	}
}
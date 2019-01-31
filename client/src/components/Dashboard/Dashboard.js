import React, {Component} from 'react';
import { RaisedButton} from 'material-ui';
import logo from "../../logo.png";
import "./Dashboard.css";
import "./type.js"


class Dashboard extends Component {

	render(){
		return (			
			<div className="dashboard-page">
				<img src={logo} alt="logo" className="logo-dashboard"/>
				<div className="typed-text">					
					  <a href="" className="typewrite" data-period="1000" 
					  data-type=
					  '[ 
					  	"RU OK?",
					  	"Search for Counselors", 
					  	"Chat with others",
					  	"Ask questions",
					  	"Share your thoughts",
					  	"Find latest wellness related news!"
					   ]'>
					    <span className="wrap"></span>
				</div>
				<RaisedButton 
					label="Log In" 
					className="btn-dashboard" 
					href="/login"
					backgroundColor="#fffacd"
					labelColor="#000"
				/>
				<RaisedButton 
					label="Sign up" 
					className="btn-dashboard" 
					href="/register"
					backgroundColor="#fffacd"
					labelColor="#000"
				/>
			</div>  		 
		);
  	}

}

export default Dashboard;


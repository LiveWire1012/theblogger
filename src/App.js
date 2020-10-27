import React from 'react';
import Nav from './Components/Navbar/Navbar';
import Test from './Test';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Components/Navbar/Navbar.css';

function App() {
  return (
	<div className = "mainpage">
		<Nav/>
		<div className="App">	
			<Test/>	
			<Test/>	
			<Test/>	
		</div>
	</div> 
  );
}

export default App;

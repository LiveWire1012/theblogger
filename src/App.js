import React from 'react';
import Nav from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Components/Navbar/Navbar.css';
import Title from './Components/OpenText/OpenText';

function App() {
  return (
	<div className = "mainpage">
		<Nav/>
		<div className="App">	
			<Title/>
		</div>
	</div> 
  );
}

export default App;

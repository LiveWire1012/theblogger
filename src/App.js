import React from 'react';
import Nav from './Components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Components/Navbar/Navbar.css';
import Title from './Components/OpenText/OpenText';
import Test from './Test';
import Create from './Components/Create/Create';

function App() {
  return (
	<div className = "page">
		<Nav name = "THE BLOGGER"/>
		<div className="App">	
			<Title/>
		</div>
		<section class = "sections" id = "section2">
			<Create/>
			
		</section>				
	</div> 
  );
}

export default App;

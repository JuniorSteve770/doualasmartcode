import React from 'react';
import './App.css';

import Heading from './components/01Heading';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 import Home from './components/02Containers/01Home';
  import ContactUS from './components/02Containers/04ContactUS';
  import AboutUS from './components/02Containers/03AboutUS';
 import Post from './components/02Containers/02Post/index';
 import {Foter} from './components/01Heading/02Footer/index'

function App() {
  return (

    <Router>
      <div className="App">
      
        <Heading/>

        <Route path="/" exact component={Home} />
        <Route path="/contact-us"  component={ContactUS}/> 
        <Route path="/about" component={AboutUS} /> 
        <Route path="/post" component={Post} /> 

        <Foter/>
      </div>
    </Router>
    
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavigationBar /> {/* Render the NavigationBar component */}
        <Switch>
          {/* <Route path="/login" component={LoginPage} /> */}
          {/* <Route path="/signup" component={SignupPage} /> */}
          {/* <Route path="/products" component={ProductsPage} /> */}
          {/* Add more routes for other pages if needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

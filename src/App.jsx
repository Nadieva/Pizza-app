import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from './components/ProductList';
import { ErrorMessage } from './components/ErrorComponent';
import { Footer } from './components/Footer';
import { HomeComponent } from './components/Home';
import { Navbar } from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Switch>
          <Route path={["/", "/home"]} exact component={HomeComponent} />
          <Route path="/:productType" exact component={ProductList} />
          <Route component={ErrorMessage} />
        </Switch>
      </div>
      <Footer />

    </Router>
  );
}

export default App;

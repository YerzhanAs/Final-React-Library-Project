import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import AddBooks from './containers/AddBooks'
import SearchBooks from './containers/SearchBooks'
import HomePage from "./containers/HomePage";
import SignInPage from "./containers/SignInPage";

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={ AddBooks } />
                <Route path="/search" component={ SearchBooks } />
                <Route path="/home" component={ HomePage } />
                <Route path="/signin" component={ SignInPage } ></Route>
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;

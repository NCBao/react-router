import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Routes from './components/Routes';

class App extends Component {
    render() {
        return (
            <Router>
                <Menu></Menu>
                <Routes></Routes>
            </Router>
        );
    }
}

export default App;

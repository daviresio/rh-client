import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store";
import Routes from "./routes";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Routes/>
            </Provider>
        );
    }
}

export default App;
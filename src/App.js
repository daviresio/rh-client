import React, {Component} from 'react';
import './App.css';
import {Provider} from "react-redux";
import {store} from "./store";
import Routes from "./routes";
import Modais from "./layout/Modais";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Modais/>
                <Routes/>
            </Provider>
        );
    }
}

export default App;

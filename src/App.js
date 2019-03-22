import React, {Component} from 'react';
import './App.css';
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Colaboradores from "./pages/Colaboradores";
import NovoColaborador from "./pages/colaboradores/NovoColaborador";

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Navbar/>
                    <Switch>
                        <Route path={'/'} exact={true} component={Home}/>
                        <Route path={'/colaboradores'} exact={true} component={Colaboradores}/>
                        <Route path={'/colaboradores/novo'} exact={true} component={NovoColaborador}/>
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
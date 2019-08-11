import React from 'react';
import {Route} from "react-router";
import {isAuthenticated, logoutAndRedirectToLogin} from "../config/auth";
import {isEmpty} from "../util/metodosUteis";
import {connect} from "react-redux";
import {carregarInformacoesUsuario} from "../store/actions/usuarioActions";

const ProtectedRoute = ({component: Component, usuario, loadUser, ...rest}) => (
    <Route {...rest} render={props => {
        if (isAuthenticated()) {
            if (isEmpty(usuario)) {
                loadUser()
            }
            return <Component {...props}/>
        } else logoutAndRedirectToLogin()
    }}/>
);


export default connect(
    ({usuario}) => ({usuario: usuario.usuario}),
    dispatch => ({loadUser: () => dispatch(carregarInformacoesUsuario())})
)(ProtectedRoute);

import React from 'react'
import {connect} from "react-redux";
import {changeRoute} from '../../store/actions/routerActions'

const CardHome = ({title, qtd, message, button, route, color, navigate}) =>
    <div className={'card-home'}>
        <div className={`card-home-${color}-title card-home-title`}>{title}</div>
        <div className={`card-home-${color}-body card-home-body`}><span>{qtd}</span><span>{message}</span></div>
        <div onClick={()=> navigate(route)} className={`card-home-${color}-button card-home-button`}>{button}</div>
    </div>

const mapDispatchToProps = dispatch => ({navigate: route => dispatch(changeRoute(route))})
export default connect(null, mapDispatchToProps)(CardHome)

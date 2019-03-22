import React from 'react'

export default ({title, qtd, message, button, action, color}) =>
    <div className={'card-home'}>
        <div className={`card-home-${color}-title card-home-title`}>{title}</div>
        <div className={`card-home-${color}-body card-home-body`}><span>{qtd}</span><span>{message}</span></div>
        <div className={`card-home-${color}-button card-home-button`}>{button}</div>
    </div>
import React from 'react';

const CardBorda = props => {
    const color = props.color ? `card-borda-header-${props.color}` : ''
    let action = <div className={'icon-action'} onClick={props.onClick} />
    if (props.iconAction) {
        switch (props.iconAction) {
            case 'novo-edit':
                action = React.cloneElement(action, {},<><i className="fas fa-pen"/><span>Novo</span></>)
                break
            case 'edit':
                action = React.cloneElement(action, {}, <><i className="fas fa-pen"/><span>Editar</span></>)
                break
            case 'solicitar-ferias':
                action = React.cloneElement(action, {}, <><i className="fas fa-comments"/><span>Solicitar ferias</span></>)
                break
            case 'adicionar':
                action = React.cloneElement(action, {}, <><i className="fas fa-plus"/><span>Adicionar</span></>)
                break
            case 'config':
                action = React.cloneElement(action, {}, <i className="fas fa-cogs" style={{fontSize: '1.6rem'}}/>)
                break
            default:
                action = props.iconAction
                break
        }
    }
    return (
        <div className={'card-borda'} style={props.style}>
            <div className={`card-borda-header ${color}`}>
                <div><i className={`fas fa-${props.icon}`}/> <span>{props.title}</span></div>
                {action}
            </div>

            <div className={props.start ? 'card-borda-body card-borda-body-start' : 'card-borda-body'}>
                {props.children}
            </div>
        </div>
    );
};

export default CardBorda;

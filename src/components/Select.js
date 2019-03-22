import React, {Component} from 'react';

class Select extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listOpen: false,
            title: this.props.title,
            selected: {},
            values: [
                {
                    id: 1,
                    nome: 'programador'
                },
                {
                    id: 2,
                    nome: 'webdesigner'
                }
            ]
        }
        this.selectItem = this.selectItem.bind(this);
    }

    selectItem = e => {
        this.setState({...this.state, selected: e, listOpen: false})
    }

    render() {
        const itens = this.state.values.map(o => <li key={o.id} onClick={o=> this.selectItem(o)} className={'select-list-item'}>{o.nome}</li>)
        return (
            <div className={'select-container select-container-width-1'}>
                <div className={'input select-header'} onClick={() => this.setState({...this.state, listOpen: ! this.state.listOpen})}>
                    <div className={'select-header-title'}>{Object.isEmpty(this.state.selected) ? this.props.title : this.state.selected}</div>
                </div>
                {(this.state.listOpen) && <ul className={'select-list'}>{itens}</ul>}
            </div>
        );
    }
}

export default Select;
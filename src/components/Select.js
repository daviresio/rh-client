import React, {Component} from 'react';
import ClickOutside from "./ClickOutside";

class Select extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listOpen: false,
            selected: null,
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
        };
        this.selectItem = this.selectItem.bind(this);
    }

    selectItem = i => this.setState({...this.state, selected: this.state.values[i], listOpen: false})

    render() {
        const itens = this.state.values.map((o, i) => <li key={o.id} onClick={() => this.selectItem(i)}
                                                          className={'select-list-item'}>{o.nome}</li>)
        return (
            <ClickOutside clickOutside={() => this.setState({...this.state, listOpen: false})}>
                <div className={'select-container select-container-width-1'}>
                    <div className={'input select-header'}
                         onClick={() => this.setState({...this.state, listOpen: !this.state.listOpen})}>
                        <div
                            className={'select-header-title'}>{this.state.selected === null ? 'Selecione' : this.state.selected.nome}</div>
                    </div>
                    {(this.state.listOpen) && <ul className={'select-list'}>{itens}</ul>}
                </div>
            </ClickOutside>
        );
    }
}

export default Select;
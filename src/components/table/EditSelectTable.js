import React, {useState} from 'react';
import Select from "../form/Select";
import {connect} from "react-redux";
import {save, update} from "../../store/actions/serverActions";

const EditSelectTable = ({obj = '', options = [], update, data = {}, entity = ''}) => {

    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState(data[obj] && data[obj].id ? data[obj].id : null);

    const onChange = e => {
        data[obj] = {id: e};
        setValue(e);
    };

    const handleSave = () => {
        update(entity, data);
        setVisible(false)
    };

    const input = {input: {value, onChange}};

    const label = () => {
        if(value) {
            const v = options.filter(x => x.id === value)[0]
            if(v) return v.nome
        }

        return 'Sem informacao'
    }

    return (
        visible ?
            <div className={'container-input-edit-table'}>
                <Select {...input} options={options} className={' input-width-1 select-nopad'}/>
                <div className={'botoes botao-salvar'} onClick={handleSave}><i className="fas fa-check"/></div>
                <div className={'botoes botao-cancelar'} onClick={() => setVisible(false)}><i className="fas fa-times"/></div>
            </div>
            : <span onClick={() => setVisible(true)} className={!value ? 'sem-informacao' : null}>{label()}</span>
    );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    save: (entity, value, options) => dispatch(save(entity, value, options)),
    update: (entity, value, options) => dispatch(update(entity, value, options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditSelectTable);

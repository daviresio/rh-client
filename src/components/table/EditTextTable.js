import React, {useState} from 'react';
import Input from "../form/Input";
import {save, update} from "../../store/actions/serverActions";
import {connect} from "react-redux";

const EditTextTable = ({entity, data, obj, field, update, ...props}) => {

    const setInitialvalue = () => {
        if(obj) {
            if(data[obj]) {
                return data[obj][field] || ''
            } else {
                return ''
            }
        }
        return data[field] || ''
    };

    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState(setInitialvalue());
    const [valueToSend, setValueToSend] = useState(null);

    const onChange = e => {
        if(obj) {
            if(!data[obj]) {
                data = {...data, [obj]: {[field]: e}};
                setValueToSend({...data, [obj]: {[field]: e}})
            } else {
            data[obj][field] = e
            }
        } else {
            data[field] = e
        }
        setValue(e)
    };

    const handleSave = () => {
        update(entity, valueToSend ? valueToSend : data);
        setVisible(false)
    };

    const input = {input: {value, onChange}};

    return (
        visible ?
        <div className={'container-input-edit-table'}>
            <Input {...input} className={' input-width-1 input-nopad'} />
            <div className={'botoes botao-salvar'} onClick={handleSave}><i className="fas fa-check"/></div>
            <div className={'botoes botao-cancelar'} onClick={()=> setVisible(false)}><i className="fas fa-times"/></div>
        </div>
            : <span onClick={()=> setVisible(true)} className={!value ? 'sem-informacao' : null}>{value ? value : 'Sem informacao'}</span>
    );
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
    save: (entity, value, options) => dispatch(save(entity, value, options)),
    update: (entity, value, options) => dispatch(update(entity, value, options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditTextTable);

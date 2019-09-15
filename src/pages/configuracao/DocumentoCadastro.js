import React, {useEffect, useState} from 'react';
import Buttom from "../../components/Buttom";
import CardSimples from "../../components/card/CardSimples";
import {Field, reduxForm} from "redux-form";
import {changeRoute} from "../../store/actions/routerActions";
import {connect} from "react-redux";
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import AlignRight from "../../components/util/AlignRight";
import {save, search, update} from "../../store/actions/serverActions";
import InputRow from "../../components/form/InputRow";

let DocumentoCadastro = ({handleSubmit, changeRoute, match, documento, search, save, update}) => {

    const [value, setValue] = useState();

    useEffect(() => {
        if (match.params.id) {
            search(match.params.id)
        }
        setValue(documento)
    }, [documento]);

    const submit = v => {
        const data = {conteudo: value};
        match.params.id ? update(data) : save(data)
    };

    return (
        <>
            <Buttom color={'gray'} label={'voltar'} onClick={() => changeRoute('/configuracao/documentos-minutas')}/>
            <CardSimples start={true}>
                <form onSubmit={handleSubmit(submit)} style={{width: '100%'}}>
                    <Field name={'nome'} component={InputRow} label={'Titulo'} required/>
                    <CKEditor editor={ClassicEditor} config={{
                        toolbar: ['bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote'],
                        height: 600
                    }} data={value} onChange={(e, v) => setValue(v.getData())}/>
                    <AlignRight style={{marginTop: '2rem'}}>
                        <Buttom color={'blue'} label={'Salvar'} type={'submit'}/>
                    </AlignRight>
                </form>
            </CardSimples>
        </>
    );
};

DocumentoCadastro = reduxForm({form: "novoDocumento", enableReinitialize: true})(DocumentoCadastro);

const mapStateToProps = state => ({
    router: state.router,
    initialValues: state.serverValues.minuta
});

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route)),
    search: id => dispatch(search('minutas', id, 'minuta')),
    save: (value) => dispatch(save('minutas', value, {redirect: {route: '/configuracao/documentos-minutas'}, field: 'minuta'})),
    update: (value) => dispatch(update('minutas', value, {redirect: {route: '/configuracao/documentos-minutas'}, field: 'minuta'})),
});

export default connect(mapStateToProps, mapDispatchToProps)(DocumentoCadastro);

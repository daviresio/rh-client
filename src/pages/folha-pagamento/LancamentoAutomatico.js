import React from 'react';
import CardBorda from "../../components/card/CardBorda";
import Checkbox from "../../components/form/Checkbox";
import Buttom from "../../components/Buttom";
import {connect} from "react-redux";

const LancamentoAutomatico = router => {
    return (
        <>
            <Buttom color={'gray'} label={'voltar'} style={{marginTop: '2rem'}} onClick={router.history.goBack} />
            <CardBorda start title={'Lancamentos'} style={{marginTop: '.5rem'}}>
                <Checkbox label={'Contribuicao sindical'} /> <br />
                <Checkbox label={'Afastamentos'} /> <br />
                <Checkbox label={'Ferias'} /> <br />
                <Buttom color={'blue'} label={'Exportar guia'}/>
                <Buttom color={'blue'} label={'Importar guia'} style={{marginTop: '2rem'}}/>
            </CardBorda>
        </>
    );
};

export default connect(({router}) => ({router}))(LancamentoAutomatico);

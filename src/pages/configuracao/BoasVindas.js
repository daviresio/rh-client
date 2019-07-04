import React from 'react';
import Page from "../../layout/Page";
import Buttom from "../../components/Buttom";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";
import CardSimples from "../../components/card/CardSimples";
import AlignRight from "../../components/util/AlignRight";
import Input from "../../components/form/Input";
import Table from "../../components/table/Table";

const BoasVindas = ({changeRoute}) => {
    return (
        <Page title={'Envio de boas vindas'}>
            <Buttom color={'gray'} label={'Voltar'} onClick={()=> changeRoute('/colaboradores/gerenciar-acesso')}/>
            <CardSimples start>
                <Buttom color={'blue'} label={'Enviar boas vindas'}/>
                <AlignRight>
                    <Input style={{maxWidth: '20rem'}} placeholder={'Procurar...'}/>
                </AlignRight>
                <Table selectMultiple header={['', 'Nome', 'E-mail']} keys={['nome', 'email']} data={[]} />
            </CardSimples>
        </Page>
    );
};

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route)),
})


export default connect(mapStateToProps, mapDispatchToProps)(BoasVindas);

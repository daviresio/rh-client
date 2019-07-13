import React, {useEffect} from 'react';
import Buttom from "../../components/Buttom";
import CardSimples from "../../components/card/CardSimples";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";
import Table from "../../components/table/Table";
import {loadList} from "../../store/actions/serverActions";

const LembretesLista = ({changeRoute, router, loadData, lembretes}) => {

    const path = '/comunicacao/lembretes/'

    useEffect(()=> {
        loadData('lembretes')
    }, [])

    return (
        <div className={'lembretes'}>
            <div className={'title'}>{'Lembretes'}</div>
            <div className={'subtitle'}>{'Através dessa funcionalidade, você poderá organizar alertas e lembretes de datas recorrentes e pontuais. Clique no botão criar um lembrete e preencha o formulário.'}</div>
            <Buttom className={'botao'} color={'green'} label={'Criar lembrete'} onClick={()=>changeRoute(path + 'cadastro')}/>
            <CardSimples>
                <Table header={['Lembrete', 'Titulo', 'Descricao', 'Dia do lembrete', 'Recorrente?', 'Acoes']}
                keys={['id', 'titulo', 'descricao', 'periodo', 'lembreteRecorrente']} data={lembretes}/>
            </CardSimples>
        </div>
    );
};

const mapStateToProps = state => ({
    router: state.router,
    lembretes: state.serverValues.lembretes
})

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route)),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
})

export default connect(mapStateToProps, mapDispatchToProps)(LembretesLista);

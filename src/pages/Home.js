import React, {useEffect} from 'react';
import Page from "../layout/Page";
import CardHome from "../components/card/CardHome";
import Calendar from "../components/Calendar";
import CardBorda from "../components/card/CardBorda";
import Buttom from "../components/Buttom";
import CardSimples from "../components/card/CardSimples";
import {connect} from "react-redux";
import {loadList, remove} from "../store/actions/serverActions";
import BarChart from "../components/BarChart";
import {changeRoute} from "../store/actions/routerActions";

const randomValue = () => Math.floor(Math.random() * 50) + 1;

const TEMP_DATA = [
    {
        label: 'Jan',
        value: randomValue(),
    }, {
        label: 'Feb',
        value: randomValue(),
    }, {
        label: 'Mar',
        value: randomValue(),
    }, {
        label: 'Abr',
        value: randomValue(),
    }, {
        label: 'Mai',
        value: randomValue(),
    }, {
        label: 'Jun',
        value: randomValue(),
    },
];

const Home = ({loadData, qtd, changeRoute, lembretes, remove, match}) => {

    useEffect(()=> {
        loadData('colaboradores/quantidade', 'qtdColaboradores');
        loadData('lembretes')
    }, []);

    return (
        <Page title={'Painel'}>
            <div className={'home-resumos'}>
                <CardHome title={'Admissoes / Inclusoes pendentes'} qtd={qtd.admissaoPendente || 0} color={'black'}
                          button={'Incluir novo colaborador'} route={'/colaboradores/cadastro'}
                          message={'Colaboradores em admissao'}/>
                <CardHome title={'Na ativa'} qtd={qtd.ativo || 0} color={'green'} button={'Ir para colaboradores'} route={'/colaboradores'}
                          message={'Colaboradores ativos'}/>
                <CardHome title={'Ferias / Faltas / Afastamentos'} qtd={0} color={'orange'} button={'Gerenciar ferias'}
                          message={'Colaboradores nesse estagio'} route={'/ferias'}/>
            </div>
            <div className={'home-center'}>
                <CardSimples style={{marginTop: '2rem', height: '92%'}}>
                    <BarChart data={TEMP_DATA} title={'Headcount por mes'}/>
                </CardSimples>

                <CardBorda start title={'Lembretes'} color={'dark'}>
                <div className={'content'}>
                    {lembretes && lembretes.length > 0 && lembretes.map(v =>
                        <LembreteItem key={v.id} {...v} edit={() => changeRoute(`/comunicacao/lembretes/cadastro/${v.id}`)}
                                      deletar={() => remove('lembretes', v.id, match.params.id)}/>
                    )}
                </div>
                <div className={'footer'}>
                    <Buttom color={'blue'} label={'Editar lembretes'} onClick={() => changeRoute('/comunicacao/lembretes')}/>
                    <Buttom color={'green'} label={'Novo lembrete'} onClick={() => changeRoute('/comunicacao/lembretes/cadastro')}/>
                </div>

            </CardBorda>
            </div>
            <Calendar lembretes={lembretes}/>
        </Page>
    );
};

const mapStateToProps = state => ({
    qtd: state.serverValues.qtdColaboradores,
    lembretes: state.serverValues.lembretes,
});
const mapDispatchToProps = dispatch => ({
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    changeRoute: route => dispatch(changeRoute(route)),
    remove: (entity, value, target, options) => dispatch(remove(entity, value, target, options)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);


const LembreteItem = ({categoria, titulo, edit, deletar}) =>
    <div style={{borderColor: getBorderColor(categoria)}} className={'lembrete-item'}>
        <span>{titulo}</span>
        <div className={'acoes'}>
            <i className="fas fa-edit" onClick={edit}/>
            <i className="fas fa-trash-alt" onClick={deletar}/>
        </div>
    </div>;


const getBorderColor = v => 'red';

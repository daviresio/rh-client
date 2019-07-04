import React, {useState} from 'react';
import Page from "../layout/Page";
import SimplePanel from "../components/SimplePanel";
import Message from "../components/util/Message";
import Table from "../components/table/Table";
import CardBorda from "../components/card/CardBorda";
import Buttom from "../components/Buttom";
import Input from "../components/form/Input";
import {changeRoute} from "../store/actions/routerActions";
import {connect} from "react-redux";

const Ferias = ({changeRoute}) => {

    const [infoSelected, setInfoSelected] = useState(0)

    const showMessage = () =>
        infoSelected === 0 ? <Message text={'Nenhum colaborador está em férias'} color={'blue'}/>
            : infoSelected === 1 ? <Message text={'Nenhum colaborador com férias próximo a vencer'} color={'orange'}/>
            : <Message text={'Nenhum colaborador sairá de férias nos próximos 30 dias'} color={'green'}/>


    return (
        <Page title={'Ferias'}>
            <div className={'ferias page-divided'}>
                <div>
                    <div className={'painel'}>
                        <div className={'resumos'}>
                            <SimplePanel color={'blue'} qtd={'0'} text={'Colaboradores em ferias'} onClick={()=>setInfoSelected(0)}/>
                            <SimplePanel color={'orange'} qtd={'0'}
                                         text={'Colaboradores com ferias a vencer nos proximos 90 dias'} onClick={()=>setInfoSelected(1)}/>
                            <SimplePanel color={'green'} qtd={'0'}
                                         text={'Colaboradores que sairao de ferias nos proximos meses'} onClick={()=>setInfoSelected(2)}/>
                        </div>
                        {showMessage()}
                        &nbsp;
                    </div>
                    <CardBorda title={`Saldo de ferias`}>
                        <Table header={['Nome', 'Início do aquisitivo', 'Fim do aquisitivo', 'Fim do concessivo', 'Saldo proporcional', 'Saldo disponível']}
                               keys={['nome', 'inicioDoAquisitivo', 'fimDoAquisitivo', 'fimDoConcessivo', 'saldoProporcional', 'saldoDisponivel']}
                        data={[{
                            nome: 'Jonas Fake ',
                            inicioDoAquisitivo: '27/02/2019',
                            fimDoAquisitivo: '26/02/2020',
                            fimDoConcessivo: '26/02/2020',
                            saldoProporcional: '10,00',
                            saldoDisponivel: '30',
                        }]}/>
                    </CardBorda>
                </div>
                <div>
                    <CardBorda style={{marginTop: '0'}} icon={'spinner'} color={'orange'} title={'Ferias para aprovacao (0)'}>
                        <Input/>
                        <div style={{fontSize: '1.2rem'}}>Nenhum resultado encontrado</div>
                    </CardBorda>
                    <CardBorda icon={'paper-plane'} color={'green'} title={'Historico de ferias aprovadas'}>
                        <Input/>
                        <div style={{fontSize: '1.2rem'}}>Nenhum resultado encontrado</div>
                    </CardBorda>
                    <CardBorda icon={'paper-plane'} title={'Historico de ferias coletivas'}>
                        <Input/>
                        <div style={{fontSize: '1.2rem'}}>Nenhum resultado encontrado</div>
                    </CardBorda>
                    <CardBorda icon={'paper-plane'} color={'red'} title={'Historico de ferias reprovadas'}>
                        <Input/>
                        <div style={{fontSize: '1.2rem'}}>Nenhum resultado encontrado</div>
                    </CardBorda>
                    <div style={{marginTop: '2rem'}}>
                        <Buttom onClick={() => changeRoute('/ferias/cadastro-ferias-coletivas')} color={'blue'} full label={'Cadastrar ferias coletivas'}/>
                    </div>
                    <div style={{marginTop: '1rem'}}>
                        <Buttom onClick={() => changeRoute('/ferias/cadastro-ferias-individuais')} color={'blue'} full label={'Gerenciar ferias por colaborador'}/>
                    </div>
                </div>
            </div>

        </Page>
    );
};

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Ferias);

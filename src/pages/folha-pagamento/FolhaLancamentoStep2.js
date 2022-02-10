import React, {useEffect, useState} from 'react';
import Buttom from "../../components/Buttom";
import CardSimples from "../../components/card/CardSimples";
import Input from "../../components/form/Input";
import {connect} from "react-redux";
import {search} from "../../store/actions/serverActions";
import {formateDateFull, getValue} from "../../util/metodosUteis";

const userImg = require('../../assets/user.png');

const FolhaLancamentoStep2 = ({fechamentoFolha, search, match}) => {

    const [colaboradorSelecionado, setColaboradorSelecionado] = useState()

    useEffect(()=> {
        search(match.params.id)
    }, [])

    useEffect(()=> {
        if(fechamentoFolha && fechamentoFolha.colaboradores && !colaboradorSelecionado) setColaboradorSelecionado(0)
    }, [fechamentoFolha])


    const getEvento = e => {
        const data = fechamentoFolha.colaboradores[colaboradorSelecionado].fechamentoFolhaItens
        return data.filter(v => v.evento.padraoSistema === e)[0]
    }

    const somaProventos = () => {
        const data = fechamentoFolha.colaboradores[colaboradorSelecionado].fechamentoFolhaItens
        return data.filter(v => v.evento.tipo === 'Provento').reduce((accum, obj) => accum + obj.valor, 0)
    }

    const somaDescontos = () => {
        const data = fechamentoFolha.colaboradores[colaboradorSelecionado].fechamentoFolhaItens
        return data.filter(v => v.evento.tipo === 'Desconto').reduce((accum, obj) => accum + obj.valor, 0)
    }

    const getTotalLiquido = () => somaProventos() - somaDescontos()

    const renderItem = (colaborador, index) =>
        <div key={index} className={'colaborador-item'} onClick={()=> setColaboradorSelecionado(index)}>
            <div className={'img-container'}>
                <img src={colaborador.foto ? colaborador.foto : userImg} alt=""/>
            </div>
            <span className={'nome'}>{colaborador.nome}</span>
        </div>;

    const renderContent = () => {
        if(colaboradorSelecionado === undefined) return null

            const c = fechamentoFolha.colaboradores[colaboradorSelecionado]

        if(c === undefined) return null
        return <div className={'descricao'}>
            <div className={'header'}>
                <img src={c.foto ? c.foto : userImg}/>
                <div className={'dados-colaborador'}>
                    <div className={'title'}>
                        <span className={'nome'}>{c.nome}</span>
                        <i className="fas fa-eye" />
                    </div>
                    <div className={'detail'}>
                        <div className={'item'}>{'Cargo'}</div>
                        <div className={'item'}>{getValue('cargo.nome', c)}</div>
                        <div className={'item'}>{'Departamento'}</div>
                        <div className={'item'}>{getValue('departamento.nome', c)}</div>
                        <div className={'item'}>{'Contratacao'}</div>
                        <div className={'item'}>{formateDateFull(c.dataAdmissao)}</div>
                    </div>
                </div>
            </div>
            <table className={'table-adicionais'}>
                <thead>
                <tr>
                    <td style={{width: '10rem'}}>Cod</td>
                    <td>Descricao</td>
                    <td style={{width: '12rem'}}>(+)</td>
                    <td style={{width: '6rem'}}>(-)</td>
                </tr>
                </thead>
                <tbody>
                {c && c.fechamentoFolhaItens && c.fechamentoFolhaItens.filter(x => x.evento.campoAtivo).map(v =>
                <tr key={v.id}>
                    <td style={{width: '10rem'}}>{v.evento.codigo}</td>
                    <td>{v.evento.nome}</td>
                    <td style={{width: '12rem'}}>{v.evento.tipo === 'Provento' ? `R$ ${v.valor}` : null}</td>
                    <td style={{width: '6rem'}}>{v.evento.tipo === 'Desconto' ? `R$ ${v.valor}` : null}</td>
                </tr>
                )}
                </tbody>
            </table>
            <div className={'informacoes-financeiras'}>
                <div className={'item'}>
                    <div className={'label'}>{'IRRF'}</div>
                    <div className={'value'}>{`R$ ${getEvento('IRRF').valor}`}</div>
                </div>
                <div className={'item'}>
                    <div className={'label'}>{'INSS'}</div>
                    <div className={'value'}>{`R$ ${getEvento('INSS').valor}`}</div>
                </div>
                <div className={'item'}>
                    <div className={'label'}>{'INSS patronal'}</div>
                    <div className={'value'}>{`R$ ${getEvento('INSS_PATRONAL').valor}`}</div>
                </div>
                <div className={'item'}>
                    <div className={'label'}>{'FGTS'}</div>
                    <div className={'value'}>{`R$ ${getEvento('FGTS').valor}`}</div>
                </div>
                <div className={'item'}>
                    <div className={'label'}>{''}</div>
                    <div className={'value green'}>{`R$ ${somaProventos()}`}</div>
                </div>
                <div className={'item'}>
                    <div className={'label'}>{''}</div>
                    <div className={'value red'}>{`R$ ${somaDescontos()}`}</div>
                </div>
            </div>
            <div className={'resumo'}>
                <span className={'label'}>{'Total liquido'}</span>
                <span className={'value green'}>{`R$ ${getTotalLiquido()}`}</span>
            </div>
        </div>
    }

    return (
        <>
            <div className={'folha-lancamento-2-header'}>
                <Buttom color={'green'} label={'Reabrir folha'} style={{marginRight: '2rem'}}/>
                <Buttom color={'blue'} label={'Fazer calculos da folha'} style={{marginRight: '2rem'}}/>
                <Buttom color={'blue'} label={'Receber informacoes atuais da folha'} style={{marginRight: '2rem'}}/>
                <Buttom color={'blue'} label={'Enviar para contabilidade'}/>
            </div>
            <CardSimples start>
                <div className={'divided-inverse'}>
                    <div className={'lista'}>
                        <Input placeholder={'Buscar colaborador'}/>
                        {fechamentoFolha && fechamentoFolha.colaboradores &&
                        fechamentoFolha.colaboradores.map((v, i) => renderItem(v, i))}
                    </div>
                    {renderContent()}
                </div>
            </CardSimples>
        </>
    );
};

const mapStateToProps = state => ({
    fechamentoFolha: state.serverValues.fechamentoFolha,
})

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('fechamento-folhas', id, 'fechamentoFolha')),
})

export default connect(mapStateToProps, mapDispatchToProps)(FolhaLancamentoStep2);


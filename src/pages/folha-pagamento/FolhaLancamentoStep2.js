import React from 'react';
import Buttom from "../../components/Buttom";
import CardSimples from "../../components/card/CardSimples";
import Input from "../../components/form/Input";

const userImg = require('../../assets/user.png')

const FolhaLancamentoStep2 = () => {
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
                        {renderItem({nome: 'davi resio'})}
                        {renderItem({nome: 'davi resio'})}
                        {renderItem({nome: 'davi resio'})}
                    </div>
                    <div className={'descricao'}>
                        <div className={'header'}>
                            <img src={userImg}/>
                            <div className={'dados-colaborador'}>
                                <div className={'title'}>
                                    <span className={'nome'}>{'Davi Resio'}</span>
                                    <i className="fas fa-eye" />
                                </div>
                                <div className={'detail'}>
                                    <div className={'item'}>{'Cargo'}</div>
                                    <div className={'item'}>{'Geral'}</div>
                                    <div className={'item'}>{'Departamento'}</div>
                                    <div className={'item'}>{'Geral'}</div>
                                    <div className={'item'}>{'Contratacao'}</div>
                                    <div className={'item'}>{'10/02/2019'}</div>
                                </div>
                            </div>
                        </div>
                        <div className={'informacoes'}>
                            <div className={'dados'}>
                                <span className={'label'}>{'Cod'}</span>
                                <span className={'label'}>{'Descricao'}</span>
                            </div>
                        </div>
                        <div className={'informacoes-financeiras'}>
                            <div className={'item'}>
                                <div className={'label'}>{'IRRF'}</div>
                                <div className={'value'}>{'R$ 0,00'}</div>
                            </div>
                            <div className={'item'}>
                                <div className={'label'}>{'INSS'}</div>
                                <div className={'value'}>{'R$ 0,00'}</div>
                            </div>
                            <div className={'item'}>
                                <div className={'label'}>{'INSS patronal'}</div>
                                <div className={'value'}>{'R$ 0,00'}</div>
                            </div>
                            <div className={'item'}>
                                <div className={'label'}>{'FGTS'}</div>
                                <div className={'value'}>{'R$ 0,00'}</div>
                            </div>
                            <div className={'item'}>
                                <div className={'label'}>{'(+)'}</div>
                                <div className={'value green'}>{'R$ 0,00'}</div>
                            </div>
                            <div className={'item'}>
                                <div className={'label'}>{'(-)'}</div>
                                <div className={'value red'}>{'R$ 0,00'}</div>
                            </div>
                        </div>
                        <div className={'resumo'}>
                            <span className={'label'}>{'Total liquido'}</span>
                            <span className={'value green'}>{'R$ 0,00'}</span>
                        </div>
                    </div>
                </div>
            </CardSimples>
        </>
    );
};

export default FolhaLancamentoStep2;

const renderItem = colaborador =>
    <div className={'colaborador-item'}>
        <div className={'img-container'}>
            <img src={userImg} alt=""/>
        </div>
        <span className={'nome'}>{colaborador.nome}</span>
    </div>
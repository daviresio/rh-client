import React from 'react';
import Page from "../layout/Page";
import CardExpanded from "../components/card/CardExpanded";
import Buttom from "../components/Buttom";

const Relatorios = () => {
    return (
        <Page title={'Relatorios da empresa'}>
            <div className={'gerar-relatorio-subtitle'}>
                <span>{'Relatorios prontos'}</span>
                <Buttom color={'green'} label={'Gerar relatorio customizado'} />
            </div>

            <div className={'page-relatorios'}>
                <CardExpanded title={'Colaboradores - Dados cadastrais'}>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Aniversarios'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Dados bancarios'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Dados de emergencia'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Dependentes'}</span>
                    </div>
                </CardExpanded>

                <CardExpanded title={'Colaboradores - Dados de registro'}>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Colaboradores por vinculo'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Gestores'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Tempo de casa'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Anotacoes'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Cargos e salarios'}</span>
                    </div>
                </CardExpanded>

                <CardExpanded title={'Movimentacao de colaboradores'}>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Admissoes'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Desligamentos'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Faltas'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Colaboradores em periodo de experiencia'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Idade por cargo'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Idade por departamento'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Jornadas de trabalho'}</span>
                    </div>
                </CardExpanded>
                <CardExpanded title={'Ferias'}>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'A vencer (proximos 90 dias)'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'A vencer (proximos 6 meses)'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Passivo de ferias'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Programacao (ferias planejadas)'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Overview'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Saldo de ferias'}</span>
                    </div>
                </CardExpanded>
                <CardExpanded title={'Beneficios'}>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Vinculados por beneficios (Colaboradores)'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Vinculados por beneficios (Dependentes)'}</span>
                    </div>
                    <div className={'gerar-relatorio'}>
                        <i className="fas fa-download" />
                        <span>{'Conciliacao'}</span>
                    </div>
                </CardExpanded>
            </div>

        </Page>
    );
};

export default Relatorios;

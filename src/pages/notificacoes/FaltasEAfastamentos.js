import React from 'react';
import Buttom from "../../components/Buttom";
import SelectRow from "../../components/form/SelectRow";
import Divided from "../../components/util/Divided";
import InputRow from "../../components/form/InputRow";

const FaltasEAfastamentos = () => {
    return (
        <>
            <div className="title">{'Faltas e afastamentos'}</div>
            <div className="item">
                <span className={'negrito'}>{'Oque `e?'}</span>
                <span>{' A cada vez que uma falta ou um afastamento é registrado ou editado, um e-mail é enviado para os e-mails configurados abaixo. '}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Quando?'}</span>
                <span>{' Sempre que uma falta ou um afastamento é criado ou editado. '}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Texto'}</span>
                <div>
                    <span className={'negrito'}>{' Assunto do e-mail de criação:'}</span>
                    <p>Novo registro de falta/afastamento do colaborador #colaborador (#empresa)</p>

                    <span className={'negrito'}>{' Assunto do e-mail de edição:'}</span>
                    <p>Atualização de registro de falta/afastamento do colaborador #colaborador (#empresa)</p>

                    <span className={'negrito'}>{' Conteúdo do e-mail:'}</span>
                    <p>Olá,</p>

                    <p>Foi feito um novo lançamento de falta/afastamento para o(a) colaborador(a) #colaborador, segue abaixo informações:</p>

                    <p> Motivo: #motivo</p>
                    <p> Tipo: #tipo</p>
                    <p> De: #data_de</p>
                    <p> Até: #data_ate</p>
                    <p> CID: #cid</p>

                    <p>Abraços,</p>
                    <p>Equipe Convenia</p>
                </div>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Destinatarios'}</span>
                <div className={'destinatarios'}>
                    <SelectRow label={'Contadores'} />
                    <Divided/>
                    <InputRow label={'Outros e-mails'} />
                    <div className={'botao'}>
                        <Buttom color={'green'} label={'Salvar'}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaltasEAfastamentos;

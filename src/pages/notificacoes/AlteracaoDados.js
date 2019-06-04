import React from 'react';
import Checkbox from "../../components/form/Checkbox";
import Divided from "../../components/util/Divided";
import InputRow from "../../components/form/InputRow";
import Select from "../../components/form/Select";
import SelectRow from "../../components/form/SelectRow";
import Buttom from "../../components/Buttom";

const AlteracaoDados = () => {
    return (
        <>
            <div className="title">{'Alteracao de dados'}</div>
            <div className="item">
                <span className={'negrito'}>{'Oque `e?'}</span>
                <span>{'A cada alteração que é efetuada no perfil do colaborador (Dados pessoais, Escolaridade, dados bancários etc...) é enviado um e-mail alertando sobre quais dados foram alterados. '}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Quando?'}</span>
                <span>{'Todos os dias a partir das 17:00 '}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Texto'}</span>
                <div>
                    <span className={'negrito'}>{'Alteração de dados de colaborador'}</span>
                    <p>O perfil do(a) colaborador(a) #colaborador foi alterado</p>

                    <p>Campo alterado --- Novo valor </p>

                    <p className={'link'}>Ver o histórico de alterações</p>
                </div>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Destinatarios'}</span>
                <div className={'destinatarios'}>
                    <Checkbox label={'Colaborador que alterou seus dados'} />
                    <Divided/>
                    <Checkbox label={'Gestor que alterou seus dados'} />
                    <Divided/>
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

export default AlteracaoDados;

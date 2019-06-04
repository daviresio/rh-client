import React from 'react';
import Buttom from "../../components/Buttom";
import Checkbox from "../../components/form/Checkbox";
import Divided from "../../components/util/Divided";
import SelectRow from "../../components/form/SelectRow";
import InputRow from "../../components/form/InputRow";

const PreenchimentoAdmissao = () => {
    return (
        <>
            <div className="title">{'Finalizacao de preenchimento da admissao'}</div>
            <div className="item">
                <span className={'negrito'}>{'Oque `e?'}</span>
                <span>{'\n' +
                'Notificação enviada por e-mail a partir do momento em que o colaborador, em estágio de admissão, clicar em “Finalizar admissão”. Após esta comunicação, o ' +
                'departamento de recursos humanos deverá verificar se todas as informações foram enviadas e se os documentos foram anexados à plataforma. '}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Quando?'}</span>
                <span>{' Após o preenchimento do formulário de admissão pelo colaborador '}</span>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Texto'}</span>
                <div>
                    <span className={'negrito'}>{'Formulário de admissão preenchido por #colaborador'}</span>
                    <p> Olá #empresa,</p>

                    <p> O formulário de admissão do(a) colaborador(a) #colaborador foi preenchido com sucesso. </p>

                    <p> Abraços,</p>
                    <p> Equipe Convenia </p>

                </div>
            </div>
            <div className="item">
                <span className={'negrito'}>{'Destinatarios'}</span>
                <div className={'destinatarios'}>
                    <Checkbox label={'Gestor do colaborador'} />
                    <Divided/>
                    <SelectRow label={'Contadores'} />
                    <Divided/>
                    <InputRow label={'E-mails'} />
                    <div className={'botao'}>
                        <Buttom color={'green'} label={'Salvar'}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PreenchimentoAdmissao;

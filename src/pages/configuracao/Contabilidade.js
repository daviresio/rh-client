import React, {useEffect} from 'react';
import CardSimples from "../../components/card/CardSimples";
import Buttom from "../../components/Buttom";
import {connect} from "react-redux";
import {openModal} from "../../store/actions/modalActions";
import Edit from "../../components/util/Edit";
import Delete from "../../components/util/Delete";
import {loadList, remove, removeAndReload} from "../../store/actions/serverActions";

const Contabilidade = ({openModal, contadores, loadData}) => {

    useEffect(() => {
        loadData('contadores');
    }, []);

    return (
        <CardSimples start>
            <div className={'configuracao-contador-title'}>{'Contador'}</div>

            {contadores && contadores.length && contadores.map((v, i) =>
                <div key={v.id} className={i === 0 ? 'item-cadastro-colaborador remove-border' : 'item-cadastro-colaborador'}>
                    <div className={'dados'}>
                        <div className={'campos-inline'}>
                            <div className={'campo-bold'}>Nome:</div>
                            <div className={'campo-light'}>{v.nome}</div>
                        </div>
                        <div className={'campos-inline'}>
                            <div className={'campo-bold'}>Telefone:</div>
                            <div className={'campo-light'}>{v.telefone}</div>
                        </div>
                        <div className={'campos-inline'}>
                            <div className={'campo-bold'}>Email:</div>
                            <div className={'campo-light'}>{v.email}</div>
                        </div>
                        <div className={'campos-inline'}>
                            <div className={'campo-bold'}>Software Contabil:</div>
                            <div className={'campo-light'}>{v.softwareContabil}</div>
                        </div>
                    </div>
                    <div className={'opcoes'}>
                        <Edit onClick={() => openModal('contador', v)}/>
                        <Delete onClick={() => removeAndReload('contadores', v.id)}/>
                    </div>
                </div>
            )}

            <Buttom color={'green'} label={'Adicionar contador'} onClick={()=> openModal('contador')}/>
        </CardSimples>
    );
};

const mapStateToProps = state => ({
    contadores: state.serverValues.contadores,
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal, value) => dispatch(openModal(modal, value)),
    remove: (entity, value) => dispatch(remove(entity, value)),
    loadData: entity => dispatch(loadList(entity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contabilidade);

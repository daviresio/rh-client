import React from 'react';
import Buttom from "../../components/Buttom";
import CardBorda from "../../components/card/CardBorda";
import TableContainer from "../../components/TableContainer";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import Select from "../../components/form/Select";
import {changeModalHolerite} from "../../store/actions/folhaActions";
import {connect} from "react-redux";

const Holerites = ({changeModalVisibility, modalHoleriteVisilible}) => {

    return (
        <>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <Buttom click={changeModalVisibility} color={'green'} label={'Criar novo mes'}/>
            </div>
            <CardBorda title={`Holerites`}>
                <TableContainer>
                    <Table header={['Mes', 'Ano', 'Tipo', 'Acoes']}/>
                </TableContainer>
            </CardBorda>

            <Modal visible={modalHoleriteVisilible} full={false} title={'Holerite'} footer={
                <>
                    <div style={{width: '10rem', marginRight: '2rem'}}>
                        <Buttom click={changeModalVisibility} full label={'Cancelar'} color={'red'}/>
                    </div>
                    <div style={{width: '8rem'}}>
                        <Buttom full label={'Criar'} color={'green'}/>
                    </div>
                </>
            }>
                <span
                    className={'holerite-modal-subtitle'}>{'Selecione o mes e o ano de referencia dos holerites'}</span>
                <Select/>
                <Select/>
                <Select/>
            </Modal>
        </>
    );
};
const mapStateToProps = ({folhaPagamento}) => folhaPagamento
const mapDispatchToProps = dispatch => ({
    changeModalVisibility: () => dispatch(changeModalHolerite())
})
export default connect(mapStateToProps, mapDispatchToProps)(Holerites);

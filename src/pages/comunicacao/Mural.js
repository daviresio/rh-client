import React, {useEffect} from 'react';
import Select from "../../components/form/Select";
import Buttom from "../../components/Buttom";
import Message from "../../components/util/Message";
import Input from "../../components/form/Input";
import {loadList} from "../../store/actions/serverActions";
import {connect} from "react-redux";

const Mural = ({loadData, tiposRecados}) => {

    useEffect(() => {
        loadData('tipos-recados', 'tiposRecados')
    }, []);

    return (
        <div className={'mural'}>
            <div className={'title'}>{'Mural'}</div>
            <div
                className={'subtitle'}>{'Adicione recados para os colaboradores, é possível criar um recado segmentado por departamento ou por colaborador.'}</div>
            <div className={'filtro'}>
                <div className={'mural-lista-header'}>
                    <div className={'filtros'}>
                        <Input label={'Buscar recado'}/>
                        <Select label={'Tipo'} options={tiposRecados}/>
                        <Buttom color={'blue'} label={'Buscar'} style={{marginBottom: '1rem'}}/>
                    </div>
                    <Buttom color={'green'} label={'Adicionar recado'}/>
                </div>
            </div>

            <div className="body">
                <Message icon={null} color={'orange'} text={'Nenhum recado encontrado.'}/>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    tiposRecados: state.serverValues.tiposRecados,
});

const mapDispatchToProps = dispatch => ({
    loadData: (entity, target) => dispatch(loadList(entity, target)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Mural);

import React from 'react';
import Select from "../../components/form/Select";
import Buttom from "../../components/Buttom";
import Message from "../../components/util/Message";
import Input from "../../components/form/Input";
import {tiposRecado} from "../../config/defaultValues";

const Mural = () => {
    return (
        <div className={'mural'}>
            <div className={'title'}>{'Mural'}</div>
            <div
                className={'subtitle'}>{'Adicione recados para os colaboradores, é possível criar um recado segmentado por departamento ou por colaborador.'}</div>
            <div className={'filtro'}>
                <div className={'mural-lista-header'}>
                    <div className={'filtros'}>
                        <Input label={'Buscar recado'}/>
                        <Select label={'Tipo'} options={tiposRecado}/>
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

export default Mural;

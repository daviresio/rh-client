import React from 'react';
import InputRow from "../../components/form/InputRow";
import Select from "../../components/form/Select";
import Buttom from "../../components/Buttom";
import Message from "../../components/util/Message";

const Mural = () => {
    return (
        <div className={'mural'}>
            <div className={'title'}>{'Mural'}</div>
            <div className={'subtitle'}>{'Adicione recados para os colaboradores, é possível criar um recado segmentado por departamento ou por colaborador.'}</div>
            <div className={'filtro'}>
                <div>
                    <InputRow />
                    <Select />
                    <Buttom color={'blue'} label={'Buscar'}/>
                </div>
                <Buttom color={'green'} label={'Adicionar recado'}/>
            </div>

            <div className="body">
                <Message icon={null} color={'orange'} text={'Nenhum recado encontrado.'} />
            </div>
        </div>
    );
};

export default Mural;

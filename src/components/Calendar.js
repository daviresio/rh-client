import React from 'react';
import CardSimples from "./card/CardSimples";
import Buttom from "./Buttom";

const Calendar = () => {
    return (
        <CardSimples>

            <div className={'botoes-calendar'}>
                <Buttom color={'gray'} label={'Dia'}/>
                <Buttom color={'blue'} label={'Mes'}/>
                <Buttom color={'gray'} label={'Ano'}/>
            </div>

        </CardSimples>
    );
};

export default Calendar;

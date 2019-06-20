import React from 'react';
import CardSimples from "../../components/card/CardSimples";
import Select from "../../components/form/Select";
import CardLateral from "../../components/card/CardLateral";
import CardLateralSimple from "../../components/card/CardLateralSimple";
import SelectRow from "../../components/form/SelectRow";
import Buttom from "../../components/Buttom";
import {connect} from "react-redux";
import {changeRoute} from "../../store/actions/routerActions";

const Fechamento = ({changeRoute}) => {
    return (
        <CardSimples>
            <SelectRow label={'Iniciar fechamento de folha do período'} detail={<Buttom color={'blue'} label={'Iniciar'}
            onClick={()=> changeRoute('/folha/lancamento')}/>}
            options={[{nome: '05/2019', id: 1}, {nome: '06/2019', id: 2}]}/>

            <CardLateralSimple text={'Fechamento do mes 04 de 2019'} secondText={'iniciado em 20/04/2019'}/>
        </CardSimples>
    );
};

export default connect(null, dispatch => ({changeRoute: route => dispatch(changeRoute(route))}))(Fechamento);

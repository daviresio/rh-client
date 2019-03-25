import React from 'react';
import {connect} from "react-redux";
import {colaboradorChangeTab} from "../store/actions/colaboradorActions";
const TabItem = props => {
    const {title, number, colaboradorChangeTab, tab} = props;
    return (
        <div onClick={()=>colaboradorChangeTab(number)} className={tab === number ? 'tab-item tab-active' : 'tab-item'}>{title}</div>
    );
};

const mapStateToProps = ({colaborador}) => ({tab: colaborador.tab})
const mapDispatchToProps = dispatch =>({colaboradorChangeTab: n => dispatch(colaboradorChangeTab(n))})

export default connect(mapStateToProps, mapDispatchToProps)(TabItem);

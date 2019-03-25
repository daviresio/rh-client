import React from 'react';
import TabPainel from "../components/TabPainel";
import TabItem from "../components/TabItem";
import TabContent from "../components/TabContent";
import GestaoColaboradores from "./colaboradores/GestaoColaboradores";
import PageEmpty from "./PageEmpty";
import {connect} from "react-redux";
import RelatoriosColaboradores from "./colaboradores/RelatoriosColaboradores";

const Colaboradores = ({tab}) => {
    return (
        <PageEmpty>
            <TabPainel title={'Colaboradores'}>
                <TabItem number={0} title={'Gestao de colaboradores'}/>
                <TabItem number={1} title={'Relatorios'}/>
            </TabPainel>
            <TabContent content={tab === 0 ? <GestaoColaboradores/> : <RelatoriosColaboradores/>}/>
        </PageEmpty>
    );
};
const mapStateToProps = ({colaborador}) => ({tab: colaborador.tab})
export default connect(mapStateToProps, null)(Colaboradores);

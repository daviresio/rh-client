import React from 'react';
import TabPainel from "../components/TabPainel";
import TabItem from "../components/TabItem";
import TabContent from "../components/TabContent";
import GestaoColaboradores from "./colaboradores/GestaoColaboradores";
import PageEmpty from "../layout/PageEmpty";
import {connect} from "react-redux";
import RelatoriosColaboradores from "./colaboradores/RelatoriosColaboradores";
import {colaboradorChangeTab} from "../store/actions/colaboradorActions";
import {Redirect, Route, Switch} from "react-router";
import {changeRoute} from "../store/actions/routerActions";

const Colaboradores = props => {
    const {changeRoute} = props
    const path = '/colaboradores/'
    const currentPath = props.router.location.pathname

    return (
        <PageEmpty>
            <TabPainel title={'Colaboradores'}>
                <TabItem onClick={() => changeRoute(path + 'gestao')} selected={currentPath === path + 'gestao'}
                         title={'Gestao de colaboradores'}/>
                <TabItem onClick={() => changeRoute(path + 'relatorios')}
                         selected={currentPath === path + 'relatorios'} title={'Relatorios'}/>
            </TabPainel>
            <TabContent>
                <Switch>
                    <Route path={path + 'gestao'} component={GestaoColaboradores}/>
                    <Route path={path + 'relatorios'} component={RelatoriosColaboradores}/>
                    <Redirect exact={true} from={path} to={path + 'gestao'}/>
                </Switch>
            </TabContent>
        </PageEmpty>
    );
};
const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    changeTab: tab => dispatch(colaboradorChangeTab(tab)),
    changeRoute: route => dispatch(changeRoute(route))
})
export default connect(mapStateToProps, mapDispatchToProps)(Colaboradores);

import React from 'react';
import PageEmpty from "../layout/PageEmpty";
import TabPainel from "../components/TabPainel";
import TabItem from "../components/TabItem";
import {connect} from "react-redux";
import {changeRoute} from "../store/actions/routerActions";
import TabContent from "../components/TabContent";
import {Redirect, Route, Switch} from "react-router";
import Mural from "./comunicacao/Mural";
import Lembretes from "./comunicacao/Lembretes";
import FaleComRh from "./comunicacao/FaleComRh";

const Comunicacao = props => {
    const path = '/comunicacao/';
    const currentPath = props.router.location.pathname;
    const {changeRoute} = props;

    return (
        <PageEmpty className={'comunicacao'}>
            <TabPainel title={'Comunicacao'}>
                <TabItem onClick={() => changeRoute(path + 'mural')} selected={currentPath.includes('mural')}
                         title={'Mural'}/>
                <TabItem onClick={() => changeRoute(path + 'lembretes')} selected={currentPath.includes('lembretes')}
                         title={'Alertas e lembretes'}/>
                <TabItem onClick={() => changeRoute(path + 'fale-com-rh')} selected={currentPath.includes('fale-com-rh')}
                         title={'Fale com o rh'}/>
            </TabPainel>
            <TabContent>
                <Switch>
                    <Route path={path + 'mural'} component={Mural}/>
                    <Route path={path + 'lembretes'} component={Lembretes}/>
                    <Route path={path + 'fale-com-rh'} component={FaleComRh}/>
                    <Redirect from={path} to={path + 'mural'}/>
                </Switch>
            </TabContent>
        </PageEmpty>
    );
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comunicacao);

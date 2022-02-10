import React from 'react';
import PageEmpty from "../layout/PageEmpty";
import TabPainel from "../components/TabPainel";
import TabItem from "../components/TabItem";
import TabContent from "../components/TabContent";
import Fechamento from "./folha-pagamento/Fechamento";
import Holerites from "./folha-pagamento/Holerites";
import ConfiguracaoFolha from "./folha-pagamento/ConfiguracaoFolha";
import {connect} from "react-redux";
import {Redirect, Route, Switch} from "react-router";
import {changeRoute} from "../store/actions/routerActions";

const FolhaPagamento = props => {
    const path = '/folha/';
    const currentPath = props.router.location.pathname;

    return (
        <PageEmpty>
            <TabPainel title={'Folha de pagamento'}>
                <TabItem onClick={() => props.changeRoute('/folha/fechamento')}
                         selected={currentPath.includes('fechamento')} title={'Fechamento'}/>
                <TabItem onClick={() => props.changeRoute('/folha/holerites')}
                         selected={currentPath.includes('holerites')} title={'Holerites'}/>
                <TabItem onClick={() => props.changeRoute('/folha/configuracao')}
                         selected={currentPath.includes('configuracao')} title={'Configuracao da folha'}/>
            </TabPainel>
            <TabContent>
                <Switch>
                    <Route path={path + 'fechamento'} component={Fechamento}/>
                    <Route path={path + 'holerites'} component={Holerites}/>
                    <Route path={path + 'configuracao'} component={ConfiguracaoFolha}/>
                    <Redirect exact={true} from={path} to={path + 'fechamento'}/>
                </Switch>
            </TabContent>
        </PageEmpty>
    );
};
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    changeRoute: route => dispatch(changeRoute(route))
});
export default connect(mapStateToProps, mapDispatchToProps)(FolhaPagamento);

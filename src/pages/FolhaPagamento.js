import React from 'react';
import PageEmpty from "../layout/PageEmpty";
import TabPainel from "../components/TabPainel";
import TabItem from "../components/TabItem";
import TabContent from "../components/TabContent";
import Fechamento from "./folha-pagamento/Fechamento";
import Holerites from "./folha-pagamento/Holerites";
import ConfiguracaoFolha from "./folha-pagamento/ConfiguracaoFolha";
import {changeFolhaPagamentoTab} from "../store/actions/folhaActions";
import {connect} from "react-redux";
import {Redirect, Route, Switch} from "react-router";
import {changeRoute} from "../store/actions/routerActions";

const FolhaPagamento = props => {
    const path = '/folha/'
    const currentPath = props.router.location.pathname

    return (
        <PageEmpty>
            <TabPainel title={'Folha de pagamento'}>
                <TabItem selectTab={() => props.changeRoute('fechamento')}
                         selected={currentPath === path + 'fechamento'} title={'Fechamento'}/>
                <TabItem selectTab={() => props.changeRoute('holerites')}
                         selected={currentPath === path + 'holerites'} title={'Holerites'}/>
                <TabItem selectTab={() => props.changeRoute('configuracao')}
                         selected={currentPath === path + 'configuracao'} title={'Configuracao da folha'}/>
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
const mapStateToProps = state => state

const mapDispatchToProps = dispatch => ({
    changeTab: tab => dispatch(changeFolhaPagamentoTab(tab)),
    changeRoute: route => dispatch(changeRoute(route))
})
export default connect(mapStateToProps, mapDispatchToProps)(FolhaPagamento);

import React from 'react';
import PageEmpty from "../layout/PageEmpty";
import {connect} from "react-redux";
import TabPainel from "../components/TabPainel";
import TabItem from "../components/TabItem";
import TabContent from "../components/TabContent";
import InformacoesBasicas from "./configuracao/InformacoesBasicas";
import InformacoesAdicionais from "./configuracao/InformacoesAdicionais";
import Permissoes from "./configuracao/Permissoes";
import Integracoes from "./configuracao/Integracoes";
import Contabilidade from "./configuracao/Contabilidade";
import Documentos from "./configuracao/Documentos";
import Ferias from "./configuracao/Ferias";
import AdmissaoDesligamento from "./configuracao/AdmissaoDesligamento";
import {changeRoute} from "../store/actions/routerActions";
import {Redirect, Route, Switch} from "react-router";

const Configuracao = props => {
    const {changeRoute} = props;
    const path = '/configuracao/';
    const currentPath = props.router.location.pathname;

    return (
        <PageEmpty>
            <TabPainel title={'Nome da empresa'}>
                <TabItem onClick={()=> changeRoute(path + 'informacoes-basicas')} selected={path + 'informacoes-basicas' === currentPath} title={'Informacoes basicas'}/>
                <TabItem onClick={()=> changeRoute(path + 'informacoes-adicionais')} selected={path + 'informacoes-adicionais' === currentPath} title={'Cargos, departamento e centro de custo'}/>
                <TabItem onClick={()=> changeRoute(path + 'permissoes')} selected={path + 'permissoes' === currentPath} title={'Permissoes'}/>
                <TabItem onClick={()=> changeRoute(path + 'integracoes')} selected={path + 'integracoes' === currentPath} title={'Integracoes'}/>
                <TabItem onClick={()=> changeRoute(path + 'contabilidade')} selected={path + 'contabilidade' === currentPath} title={'Contabilidade'}/>
                <TabItem onClick={()=> changeRoute(path + 'documentos-minutas')} selected={path + 'documentos-minutas' === currentPath} title={'Documentos e minutas'}/>
                <TabItem onClick={()=> changeRoute(path + 'ferias')} selected={path + 'ferias' === currentPath} title={'Ferias'}/>
                <TabItem onClick={()=> changeRoute(path + 'admissao-desligamento')} selected={path + 'admissao-desligamento' === currentPath} title={'Admissao/Desligamento'}/>
            </TabPainel>
            <TabContent>
                <Switch>
                    <Route path={path + 'informacoes-basicas'} component={InformacoesBasicas} />
                    <Route path={path + 'informacoes-adicionais'} component={InformacoesAdicionais} />
                    <Route path={path + 'permissoes'} component={Permissoes} />
                    <Route path={path + 'integracoes'} component={Integracoes} />
                    <Route path={path + 'contabilidade'} component={Contabilidade} />
                    <Route path={path + 'documentos-minutas'} component={Documentos} />
                    <Route path={path + 'ferias'} component={Ferias} />
                    <Route path={path + 'admissao-desligamento'} component={AdmissaoDesligamento} />
                    <Redirect from={path} to={path + 'informacoes-basicas'} exact={true} />
                </Switch>
            </TabContent>
        </PageEmpty>
    );
};
const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
changeRoute: route => dispatch(changeRoute(route))
});
export default connect(mapStateToProps, mapDispatchToProps)(Configuracao);

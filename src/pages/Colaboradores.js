import React from 'react';
import Page from "./Page";
import TabPainel from "../components/TabPainel";
import TabItem from "../components/TabItem";
import TabContent from "../components/TabContent";
import GestaoColaboradores from "./colaboradores/GestaoColaboradores";

const Colaboradores = () => {
    return (
        <Page title={'Colaboradores'}>
            <TabPainel>
                <TabItem title={'Gestao de colaboradores'}/>
                <TabItem title={'Relatorios'}/>
            </TabPainel>
            <TabContent content={<GestaoColaboradores/>}/>
        </Page>
    );
};

export default Colaboradores;

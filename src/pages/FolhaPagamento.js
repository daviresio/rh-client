import React from 'react';
import PageEmpty from "./PageEmpty";
import TabPainel from "../components/TabPainel";
import TabItem from "../components/TabItem";
import TabContent from "../components/TabContent";
import Fechamento from "./folha-pagamento/Fechamento";
import Holerites from "./folha-pagamento/Holerites";
import ConfiguracaoFolha from "./folha-pagamento/ConfiguracaoFolha";

const FolhaPagamento = ({tab}) => {
    return (
        <PageEmpty>
            <TabPainel title={'Folha de pagamento'}>
                <TabItem number={0} title={'Fechamento'}/>
                <TabItem number={1} title={'Holerites'}/>
                <TabItem number={2} title={'Configuracao da folha'}/>
            </TabPainel>
            <TabContent content={<ConfiguracaoFolha/>}/>
        </PageEmpty>
    );
};

export default FolhaPagamento;

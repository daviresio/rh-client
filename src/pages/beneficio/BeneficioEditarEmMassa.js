import React, {useEffect, useState} from 'react';
import Page from "../../layout/Page";
import Buttom from "../../components/Buttom";
import CardSimples from "../../components/card/CardSimples";
import {changeRoute} from "../../store/actions/routerActions";
import {loadList, search} from "../../store/actions/serverActions";
import {connect} from "react-redux";
import {getValue} from "../../util/metodosUteis";
import TableManual from "../../components/table/TableManual";
import {openModalAndReloadOtherEntity} from "../../store/actions/modalActions";
import Checkbox from "../../components/form/Checkbox";
import CenterContent from "../../components/util/CenterContent";

const BeneficioEditarEmMassa = ({match, changeRoute, search, beneficio, openModalAndReload, loadData, colaboradores}) => {

    const [selected, setSelected] = useState({});

    useEffect(() => {
        search(match.params.id);
        loadData('colaboradores')
    }, []);

    const changeValue = (id, v) => {
        setSelected(prev => ({...prev, [id]: v}))
    };

    const openModal = () => {
        const selecionados = colaboradores.filter(v => selected[v.id]);

        if (selecionados.length > 0) {
            openModalAndReload('editarBeneficioEmMassa', selecionados, match.params.id)
        } else {
            alert('nenhum colaborador selecionado')
        }

    };

    return (
        <Page title={'Edicao em massa do beneficio'}>
            <div className={'editar-em-massa-botoes'}>
                <Buttom color={'gray'} label={'Voltar'} onClick={() => changeRoute('/beneficios/detalhe/' + match.params.id)}/>
            </div>

            <CardSimples>
                <div className={'table-scroll'}>
                    <TableManual tableHeader={
                        <tr>
                            <th/>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Tipo</th>
                            <th>Vinculado</th>
                            <th>Departamento</th>
                            <th>Vinculado a</th>
                            <th>Data de admissao</th>
                            <th>R$/Func.</th>
                            <th>R$/Empresa</th>
                            <th>Status</th>
                        </tr>
                    }
                                 tableBody={
                                     colaboradores && colaboradores.map((v, i) =>
                                         <tr key={v.id}>
                                             <td><Checkbox {...{value: selected[v.id], onChange: value => changeValue(v.id, value)}} /></td>
                                             <td>{v.nome}</td>
                                             <td>{v.dataNascimento}</td>
                                             <td>{v.tipo}</td>
                                             <td>{getValue('vinculo.nome', v)}</td>
                                             <td>{getValue('departamento.nome', v)}</td>
                                             <td>{''}</td>
                                             <td>{getValue(v.dataAdmissao)}</td>
                                             <td>{getValue('ColaboradorBeneficio.custoColaborador', v)}</td>
                                             <td>{getValue('ColaboradorBeneficio.custoEmpresa', v)}</td>
                                             <td>{}</td>
                                         </tr>
                                     )
                                 }
                    />
                </div>
            </CardSimples>
            <CenterContent style={{position: 'relative', top: '-5rem'}}>
                <Buttom color={'blue'} label={'Editar em massa'} onClick={openModal}/>
            </CenterContent>
        </Page>
    );
};

const mapStateToProps = state => ({
    beneficio: state.serverValues.beneficio,
    colaboradores: state.serverValues.colaboradores,
});

const mapDispatchToProps = dispatch => ({
    search: id => dispatch(search('beneficios', id, 'beneficio')),
    changeRoute: route => dispatch(changeRoute(route)),
    loadData: (entity, target) => dispatch(loadList(entity, target)),
    openModalAndReload: (modal, value, idReload, data) => dispatch(openModalAndReloadOtherEntity(modal, value, idReload, data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BeneficioEditarEmMassa);

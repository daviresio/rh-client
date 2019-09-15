import React, {useEffect, useRef} from 'react';
import CardSimples from "../../components/card/CardSimples";
import Buttom from "../../components/Buttom";
import Divided from "../../components/util/Divided";
import {connect} from "react-redux";
import {openModal, openModalAndReloadOtherEntity} from "../../store/actions/modalActions";
import {loadList, remove, search, uploadFileUpdateWihoutFormAndReload} from "../../store/actions/serverActions";
import Edit from "../../components/util/Edit";
import Configuracoes from "../../components/util/Configuracoes";
import CenterContent from "../../components/util/CenterContent";
import ButtomAdicionar from "../../components/ButtomAdicionar";
import Delete from "../../components/util/Delete";
import {MAX_IMAGE_SIZE} from "../../config/defaultValues";
import {getValue} from "../../util/metodosUteis";

const InformacoesBasicas = ({openModal, loadData, remove, uploadFileUpdateWihoutFormAndReload, idEmpresa, search, openModalAndReload, ...props}) => {

    const {sindicatos, empresa} = props.serverValues;

    const uploadLogoRef = useRef(null);

    useEffect(() => {
        loadData('sindicatos');
        if (idEmpresa != null) search(idEmpresa)
    }, []);

    useEffect(() => {
        if (idEmpresa != null) search(idEmpresa)
    }, [idEmpresa]);

    const uploadLogo = event => {
        const type = event.target.files[0].type;
        const reader = new FileReader();
        reader.onload = e => {
            if (e.target.result.length > MAX_IMAGE_SIZE) {
                return alert('Imagem muito gramde, o tamanho maximo e de 2mb')
            }
            uploadFileUpdateWihoutFormAndReload(e.target.result, type, {entity: 'empresas', field: 'logo', currentValue: empresa, target: 'empresa'})
        };
        reader.readAsDataURL(event.target.files[0])
    };

    const renderSindicatos = () => sindicatos.length ?
        sindicatos.map((x, i) =>
            <div key={i} className={'sindicatos-list'}>
                <div className={'subgroup'}>
                    <div>
                        <div className={'item'}>
                            <div className={'propriedade'}>{'Nome do sindicato'}</div>
                            <div className={'valor'}>{x.nome}</div>
                        </div>
                        <div className={'item'}>
                            <div className={'propriedade'}>{'Site'}</div>
                            <div className={'valor'}>{x.site}</div>
                        </div>
                        <div className={'item'}>
                            <div className={'propriedade'}>{'Telefone'}</div>
                            <div className={'valor'}>{x.telefone}</div>
                        </div>
                    </div>
                    <div>
                        <Edit onClick={() => openModal('sindicato', x)}/>
                        <Configuracoes onClick={() => openModalAndReload('configuracaoSindicato', x.configuracoes, empresa.id, {sindicato: x.id})}/>
                        <Delete onClick={() => remove('sindicatos', x.id)}/>
                    </div>
                </div>
            </div>
        ) : null;

    return (
        <>
            <div className={'configuracao-informacoes-basicas page-divided'}>
                <CardSimples start>
                    <div className={'edit-logo'}>
                        <div className={'logo-image'}/>

                        <div className={'logo-button'}>
                            <input onChange={uploadLogo} type="file" ref={uploadLogoRef} style={{position: 'absolute', top: -500, left: -500, fontSize: '10rem', opacity: 0}}/>
                            <Buttom color={'blue'} label={'Alterar logo'} onClick={() => uploadLogoRef.current.click()}/>
                            <span className={'info'}>{'Tipos de arquivos suportados: gif, jpg, jpeg, png'}</span>
                            <span className={'info'}>{'Tamanho maximo 2mb'}</span>
                        </div>
                    </div>
                    <Divided/>

                    <div className={'group'}>
                        <div className={'title'}>{'Dados da empresa'}</div>
                        <div className={'subgroup'}>
                            <div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'Identificador'}</div>
                                    <div className={'valor'}>{empresa.id}</div>
                                </div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'Nome da empresa'}</div>
                                    <div className={'valor'}>{empresa.nome}</div>
                                </div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'Razao social'}</div>
                                    <div className={'valor'}>{empresa.razaoSocial}</div>
                                </div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'CNPJ'}</div>
                                    <div className={'valor'}>{empresa.cnpj}</div>
                                </div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'Telefone'}</div>
                                    <div className={'valor'}>{empresa.telefone}</div>
                                </div>
                            </div>
                            <Edit onClick={() => openModalAndReload('dadosEmpresa', empresa, empresa.id)}/>
                        </div>
                    </div>

                    <Divided/>

                    <div className={'group'}>
                        <div className={'title'}>{'Dados de cobranca'}</div>
                        <div className={'subgroup'}>
                            <div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'Razao social'}</div>
                                    <div className={'valor'}>{getValue('cobranca.razaoSocial', empresa)}</div>
                                </div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'CNPJ'}</div>
                                    <div className={'valor'}>{getValue('cobranca.cnpj', empresa)}</div>
                                </div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'E-mail'}</div>
                                    <div className={'valor'}>{getValue('cobranca.email', empresa)}</div>
                                </div>
                                <div className={'item'}>
                                    <div className={'propriedade'}>{'Endereco'}</div>
                                    <div className={'valor'}>{getValue('cobranca.endereco', empresa)}</div>
                                </div>
                            </div>
                            <Edit onClick={() => openModalAndReload('dadosCobranca', getValue('cobranca', empresa), empresa.id)}/>
                        </div>
                    </div>

                    <Divided/>

                    <div className={'group'}>
                        <div className={'title'}>{'Sindicatos'}</div>
                        {renderSindicatos()}
                        {sindicatos && sindicatos.length > 0 &&
                        <CenterContent><ButtomAdicionar label={'Adicionar sindicato'} onClick={() => openModal('sindicato')}/></CenterContent>}
                        {(!sindicatos || sindicatos.length === 0) && <Buttom color={'green'} label={'Adicionar sindicato'} onClick={() => openModal('sindicato')}/>}
                        <Divided/>
                    </div>

                </CardSimples>

                <div className={'tornar-colaborador'}>
                    <div className={'title'}>{'Clique no botao abaixo caso queira se tornar colaborador desta empresa'}</div>
                    <Buttom color={'black'} full label={'Tornar colaborador'}/>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = state => ({
    modal: state.modal,
    serverValues: state.serverValues,
    idEmpresa: getValue('usuario.empresa.id', state),
});
const mapDispatchToProps = dispatch => ({
    openModal: (modal, value) => dispatch(openModal(modal, value)),
    openModalAndReload: (modal, value, idReload, data) => dispatch(openModalAndReloadOtherEntity(modal, value, idReload, data)),
    loadData: entity => dispatch(loadList(entity)),
    remove: (entity, value) => dispatch(remove(entity, value)),
    uploadFileUpdateWihoutFormAndReload: (image, type, options) => dispatch(uploadFileUpdateWihoutFormAndReload(image, type, options)),
    search: id => dispatch(search('empresas', id, 'empresa')),
});

export default connect(mapStateToProps, mapDispatchToProps)(InformacoesBasicas);

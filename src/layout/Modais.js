import React from 'react';
import ReactDOM from 'react-dom';
import Sindicato from "../modais/Sindicato";
import DadosEmpresa from "../modais/DadosEmpresa";
import DadosCobranca from "../modais/DadosCobranca";
import Cargo from "../modais/Cargo";
import Departamento from "../modais/Departamento";
import CentroDeCusto from "../modais/CentroDeCusto";
import Contador from "../modais/Contador";
import Contato from "../modais/Contato";
import Dependente from "../modais/Dependente";
import LancamentoHoleriteModal from "../modais/LancamentoHoleriteModal";
import HoleriteModal from "../modais/HoleriteModal";
import SolicitarFerias from "../modais/SolicitarFerias";
import ConfiguracaoFolha from "../modais/ConfiguracaoFolha";
import ValoresRecorrentes from "../modais/ValoresRecorrentes";
import TermosEContratos from "../modais/TermosEContratos";
import FaltasEAfastamentos from "../modais/FaltasEAfastamentos";
import Salario from "../modais/Salario";
import Endereco from "../modais/Endereco";
import Escolaridade from "../modais/Escolaridade";
import ModalInformacoesGeraisColaborador from "../modais/ModalInformacoesGeraisColaborador";
import ModalDocumentoColaborador from "../modais/ModalDocumentoColaborador";
import ModalDadosPrincipaisColaborador from "../modais/ModalDadosPrincipaisColaborador";
import Banco from "../modais/Banco";
import Documento from "../modais/CopiaDocumento";
import Anotacao from "../modais/Anotacao";
import Beneficio from "../modais/Beneficio";
import EditarValorBeneficio from "../modais/EditarValorBeneficio";
import EditarBeneficioEmMassa from "../modais/EditarBeneficioEmMassa";
import ConfiguracaoSindicato from "../modais/ConfiguracaoSindicato";

const Modais = () =>
    ReactDOM.createPortal(
        <>
            <Departamento/>
            <Sindicato/>
            <DadosEmpresa/>
            <DadosCobranca/>
            <Cargo/>
            <CentroDeCusto/>
            <Contador/>
            <Contato/>
            <Dependente/>
            <LancamentoHoleriteModal/>
            <HoleriteModal/>
            <SolicitarFerias/>
            <ConfiguracaoFolha/>
            <ValoresRecorrentes/>
            <TermosEContratos/>
            <FaltasEAfastamentos/>
            <Salario/>
            <Anotacao/>
            <Beneficio/>
            <Endereco/>
            <Escolaridade/>
            <ModalInformacoesGeraisColaborador/>
            <ModalDocumentoColaborador/>
            <ModalDadosPrincipaisColaborador/>
            <Banco/>
            <Documento/>
            <EditarValorBeneficio/>
            <EditarBeneficioEmMassa/>
            <ConfiguracaoSindicato/>
        </>,
        document.getElementById('modal-root')
    );


export default Modais;

export const MAX_IMAGE_SIZE = 2000000;

export const simNaoOptions = [{nome: 'Sim', id: true}, {nome: 'Nao', id: false}];

export const tipoProvento = [
    {nome: 'Provento', id: 1},
    {nome: 'Desconto', id: 2},
    {nome: 'Informativo', id: 3},
    {nome: 'Exclusivo para a empresa', id: 4},
];

export const calculoProporcionalidade = [
    {nome: 'Conforme dia do mes', id: 1},
    {nome: 'Sempre 30 dias', id: 2},
];

export const tipoCalculoHorasExtras = [
    {nome: 'Mes corrente', id: 1},
    {nome: 'Mes anterior', id: 2},
    {nome: 'Dia de corte', id: 3},
];

export const quantidadeParcelasDecimoTerceiro = [
    {nome: 'Uma parcela', id: 1},
    {nome: 'Duas parcelas', id: 2},
];

export const meses = [
    {nome: 'Janeiro', id: 1},
    {nome: 'Fevereiro', id: 2},
    {nome: 'Marco', id: 3},
    {nome: 'Abril', id: 4},
    {nome: 'Maio', id: 5},
    {nome: 'Junho', id: 6},
    {nome: 'Julho', id: 7},
    {nome: 'Agosto', id: 8},
    {nome: 'Setembro', id: 9},
    {nome: 'Outubro', id: 10},
    {nome: 'Novembro', id: 11},
    {nome: 'Dezembro', id: 12},
];

export const tiposHolerite = [
    {nome: 'HoleriteModal', id: 1},
    {nome: 'Bonus', id: 2},
    {nome: 'Comissao', id: 3},
    {nome: 'Informe de rendimentos', id: 4},
    {nome: '13 salario', id: 5},
    {nome: 'Outros', id: 6},
    {nome: 'Recibo de ferias', id: 7},
    {nome: '13 salario primeira parcela', id: 8},
    {nome: '13 salario segunda parcela', id: 9},
    {nome: 'Adiantamento', id: 10},
    {nome: 'PLR', id: 11},
    {nome: 'Folha complementar', id: 12},
    {nome: 'recibos', id: 12},
];

export const tiposLembretes = [
    {nome: 'Beneficios', id: 1},
    {nome: 'Folha de pagamento', id: 2},
    {nome: 'Comunicados', id: 3},
    {nome: 'Avaliacao', id: 4},
    {nome: 'Ferias e feriados', id: 5},
    {nome: 'Admissao', id: 6},
    {nome: 'Demissao', id: 7},
    {nome: 'Ponto', id: 8},
    {nome: 'Treinamento', id: 9},
    {nome: 'Documentos', id: 10},
    {nome: 'Exame', id: 11},
    {nome: 'Eventos', id: 12},
    {nome: 'Outros', id: 13},
];

export const periodoRecorrencia = [
    {nome: 'Diariamente', id: 1},
    {nome: 'Semanalmente', id: 2},
    {nome: 'Mensalmente', id: 3},
    {nome: 'Anualmente', id: 4},
];


export const tiposCategoriaBeneficio = [
    {nome: 'Assistencia a educacao', id: 'Assistencia a educacao'},
    {nome: 'Clube de beneficios', id: 'Clube de beneficios'},
    {nome: 'Convenio farmacia', id: 'Convenio farmacia'},
    {nome: 'Estacionamento', id: 'Estacionamento'},
    {nome: 'Outros', id: 'Outros'},
    {nome: 'Plano de saude', id: 'Plano de saude'},
    {nome: 'Plano odontologico', id: 'Plano odontologico'},
    {nome: 'Previdencia', id: 'Previdencia'},
    {nome: 'Seguro de vida', id: 'Seguro de vida'},
    {nome: 'Vale alimentacao', id: 'Vale alimentacao'},
    {nome: 'Vale combustivel', id: 'Vale combustivel'},
    {nome: 'Vale refeicao', id: 'Vale refeicao'},
    {nome: 'Vale transporte', id: 'Vale transporte'},
];


export const tiposCorRaca = [
    {nome: 'Indigena', id: 'Indigena'},
    {nome: 'Branca', id: 'Branca'},
    {nome: 'Preta/Negra', id: 'Preta/Negra'},
    {nome: 'Amarela', id: 'Amarela'},
    {nome: 'Parda', id: 'Parda'},
];

export const tiposSexo = [
    {nome: 'Masculino', id: 'Masculino'},
    {nome: 'Femenino', id: 'Femenino'},
];

export const tiposEstadoCivil = [
    {nome: 'Solteiro(a)', id: 'Solteiro(a)'},
    {nome: 'Casado(a)', id: 'Casado(a)'},
    {nome: 'Divorciado(a)', id: 'Divorciado(a)'},
    {nome: 'Viuvo(a)', id: 'Viuvo(a)'},
    {nome: 'Separado(a)', id: 'Separado(a)'},
    {nome: 'Uniao estavel', id: 'Uniao estavel'},
];


export const tiposRecado = [
    {nome: 'Todos', id: 1},
    {nome: 'Importante', id: 2},
    {nome: 'Beneficios', id: 3},
    {nome: 'Politicas', id: 4},
    {nome: 'Movimentacoes', id: 5},
    {nome: 'Confraternizacao', id: 6},
];

export const tiposRelacaoContato = [
    {nome: 'Parente', id: 1},
    {nome: 'Amigo', id: 2},
    {nome: 'Pai', id: 3},
    {nome: 'Mae', id: 4},
    {nome: 'Irmao', id: 5},
    {nome: 'Conjugue', id: 6},
];


export const tiposRelacaoDependente = [
    {nome: 'Conjugue', id: 1},
    {nome: 'Companheiro com filhos e/ou uniao estavel', id: 2},
    {nome: 'Filho ou enteado ate 21 anos', id: 3},
    {nome: 'Filho ou enteado universitario ou em escola tecnica', id: 4},
    {nome: 'Irmao, neto ou bisneto com guarda', id: 5},
    {nome: 'Irmao, neto ou bisneto com guarda universitario ou em escola tecnica', id: 6},
    {nome: 'Pais, avos e bisavos', id: 7},
    {nome: 'Menor pobre, ate 21 anos', id: 8},
    {nome: 'Incapaz', id: 9},
    {nome: 'Companheiro sem filhos e/ou uniao estavel', id: 10},
    {nome: 'Agregado/outros', id: 11},
    {nome: 'Ex conjulgue que receba pensao ', id: 12},
];

export const tiposCalculoSaldoBeneficio = [
    {
        nome: 'Fixo mensal',
        id: 'Fixo mensal',
    },
    {
        nome: 'Dias uteis do mes seguinte',
        id: 'Fixo mensal',
    },
    {
        nome: 'Fixo',
        id: 'Fixo mensal',
    },
];

export const fechamentoFolhaMesAno = [
    {
        nome: '07/2019',
        id: new Date(2019, 6, 0, 0, 0, 0, 0).getTime(),
    },{
        nome: '06/2019',
        id: new Date(2019, 5, 0, 0, 0, 0, 0).getTime(),
    },{
        nome: '05/2019',
        id: new Date(2019, 4, 0, 0, 0, 0, 0).getTime(),
    },{
        nome: '04/2019',
        id: new Date(2019, 3, 0, 0, 0, 0, 0).getTime(),
    },{
        nome: '03/2019',
        id: new Date(2019, 2, 0, 0, 0, 0, 0).getTime(),
    },{
        nome: '02/2019',
        id: new Date(2019, 1, 0, 0, 0, 0, 0).getTime(),
    },
];

export const motivosAlteracaoSalario = [
    {nome: 'Promocao', id: 'Promocao'},
    {nome: 'Merito', id: 'Merito'},
    {nome: 'Alteracao de funcao', id: 'Alteracao de funcao'},
    {nome: 'Enquadramento salarial', id: 'Enquadramento salarial'},
    {nome: 'Ajuste de bolsa auxilio', id: 'Ajuste de bolsa auxilio'},
    {nome: 'Reducao de jornada de trabalho', id: 'Reducao de jornada de trabalho'},
    {nome: 'Ajuste de pro labore', id: 'Ajuste de pro labore'},
    {nome: 'Dissidio', id: 'Dissidio'},
    {nome: 'Acordo coletivo', id: 'Acordo coletivo'},
    {nome: 'Expontaneo', id: 'Expontaneo'},
    {nome: 'Admissao', id: 'Admissao'},
    {nome: 'Enquadramento de funcao', id: 'Enquadramento de funcao'},
];

export const motivosFaltaAfastamento = [
    {nome: 'Falta', id: 'Falta'},
    {nome: 'Afastamento por doenca', id: 'Afastamento por doenca'},
    {nome: 'Afastamento por acidente', id: 'Afastamento por acidente'},
    {nome: 'Licenca maternidade', id: 'Licenca maternidade'},
    {nome: 'Licenca paternidade', id: 'Licenca paternidade'},
    {nome: 'Outros', id: 'Outros'},
    {nome: 'Afastamento por suspensao', id: 'Afastamento por suspensao'},
    {nome: 'Licenca casamento', id: 'Licenca casamento'},
    {nome: 'Falecimento familiar', id: 'Falecimento familiar'},
];

export const tipoFaltaAfastamento = [
    {nome: 'Justificada', id: 'Justificada'},
    {nome: 'Nao justificada', id: 'Nao justificada'},
    {nome: 'Atestado medico', id: 'Atestado medico'},
    {nome: 'Superior a 15 dias', id: 'Superior a 15 dias'},
    {nome: 'Igual ou inferior a 15 dias', id: 'Igual ou inferior a 15 dias'},
    {nome: 'Novo afastamento - Mesmo acidednte de trabalho', id: 'Novo afastamento - Mesmo acidednte de trabalho'},
    {nome: 'Novo afastamento - Mesma doenca 60 dias', id: 'Novo afastamento - Mesma doenca 60 dias'},
    {nome: 'Prorrogacao da licenca maternidade', id: 'Prorrogacao da licenca maternidade'},
    {nome: 'Aborto nao criminoso', id: 'Aborto nao criminoso'},
    {nome: 'Adocao (ate 1 ano de idade)', id: 'Adocao (ate 1 ano de idade)'},
    {nome: 'Adocao (de 1 ate 4 anos de idade)', id: 'Adocao (de 1 ate 4 anos de idade)'},
    {nome: 'Adocao (a partir de 4 anos de idade)', id: 'Adocao (a partir de 4 anos de idade)'},
    {nome: 'Servico militar', id: 'Servico militar'},
    {nome: 'Mandato judicial', id: 'Mandato judicial'},
    {nome: 'Licenca sem vencimento', id: 'Licenca sem vencimento'},
    {nome: 'Outros motivos de vencimento temporario', id: 'Outros motivos de vencimento temporario'},
    {nome: '5 dias de licenca paternidade', id: '5 dias de licenca paternidade'},
    {nome: 'Nascimento natutal 180 dias', id: 'Nascimento natutal 180 dias'},
    {nome: 'Licenca remunerada', id: 'Licenca remunerada'},
    {nome: 'Licenca nao remunerada', id: 'Licenca nao remunerada'},
    {nome: 'Aposentadoria por invalidez', id: 'Aposentadoria por invalidez'},
    {nome: 'Licenca maternidade', id: 'Licenca maternidade'},
];

export const tiposEscolaridade = [
    {nome: 'Analfabeto, inclusive o que, embora tenha recebido instrucao, nao se alfabetizou', id: 1},
    {nome: 'Ate o 5 ano incompleto do ensino fundamental (antiga 4 serie), ou que tenha se alfabetizado sem ter frequentado escola regular', id: 2},
    {nome: '5 ano completo do ensino fundamental', id: 3},
    {nome: 'Do 6 ao 9 ano do ensino fundamental incompleto (antiga 5 e 8 serie)', id: 4},
    {nome: 'Ensino fundamental completo', id: 5},
    {nome: 'Ensino medio incompleto', id: 6},
    {nome: 'Ensino medio completo', id: 7},
    {nome: 'Tecnico incompleto', id: 8},
    {nome: 'Tecnico completo', id: 9},
    {nome: 'Tegnologo incompleto', id: 10},
    {nome: 'Tegnologo completo', id: 11},
    {nome: 'Educacao superior incompleta', id: 12},
    {nome: 'Educacao superior completa', id: 13},
    {nome: 'Pos graduacao incompleta', id: 14},
    {nome: 'Pos graduacao completa', id: 15},
    {nome: 'Mestrado incompleto', id: 16},
    {nome: 'Mestrado completo', id: 17},
    {nome: 'Doutorado incompleto', id: 18},
    {nome: 'Doutorado completo', id: 19},
];

export const categoriaAnotacao = [
    {nome: 'Outros', id: 1},
    {nome: 'Treinamento', id: 2},
    {nome: 'Passado', id: 3},
];


export const tiposStatusFerias = [
    {nome: 'Pendente', id: 'PENDENTE'},
    {nome: 'Aprovado', id: 'APROVADA'},
    {nome: 'Reprovado', id: 'REPROVADA'},
];


export const tiposConfiguracaoSindicato = [
    {nome: 'Hora extra', id: 1},
    {nome: 'Adicional', id: 2},
    {nome: 'Hora extra com adicional noturno', id: 3},
];

export const tiposDocumentosAssinados = [
    {nome: 'Pendente', id: false},
    {nome: 'Assinado', id: true},
];

export const tiposTipoDesligamento = [
    {nome: 'Antecipado pelo empregado (tempo determinado)', id: 1},
    {nome: 'Antecipado pelo empregador (tempo indeterminado)', id: 2},
    {nome: 'Culpa reciproca', id: 3},
    {nome: 'Demissao COM justa causa fora do periodo de experiencia - Pedido da empresa', id: 4},
    {nome: 'Demissao fora do contrato de experiencia - Pedido do empregado', id: 5},
    {nome: 'Demissao SEM justa causa fora do contrato de experiencia - Pedido da empresa', id: 6},
    {nome: 'Extincao da empresa', id: 7},
    {nome: 'Extincao da empresa por forca maior', id: 8},
    {nome: 'Falecimento empregador individual por opcao do empregado', id: 9},
    {nome: 'Falecimento empregador individual s/cont. da atividade da empresa', id: 10},
    {nome: 'Morte', id: 11},
    {nome: 'Morte por acidente de trabalho', id: 12},
    {nome: 'Morte por acidente de trabalho de trajeto', id: 13},
    {nome: 'Morte por doenca profissional', id: 14},
    {nome: 'Outros', id: 15},
    {nome: 'Quebra de contrato de experiencia - Pedido da empresa', id: 16},
    {nome: 'Quebra de contrato de experiencia - Pedido do empregado', id: 17},
    {nome: 'Quebra do contrato de estagio por parte do empregado', id: 18},
    {nome: 'Quebra do contrato de estagio por parte da empresa', id: 19},
    {nome: 'Rescisao contratual por acordo entre as partes', id: 20},
    {nome: 'Termino do contrato de estagio', id: 21},
    {nome: 'Termino do contrato de experiencia - Pedido da empresa', id: 22},
    {nome: 'Termino do contrato de experiencia - Pedido do empregado', id: 23},
    {nome: 'Termino do contrato de trabalho por tempo indeterminado', id: 24},
    {nome: 'Termino do contrato por falecimento', id: 25},
];


export const tiposAvisoPrevio = [
    {nome: 'Trabalhado', id: 1},
    {nome: 'Indenizado', id: 2},
    {nome: 'Nao aplicavel', id: 3},
];

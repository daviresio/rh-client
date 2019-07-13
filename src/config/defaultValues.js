export const MAX_IMAGE_SIZE = 2000000

export const simNaoOptions = [{nome: 'Sim', id: true}, {nome: 'Nao', id: false}]

export const tipoProvento = [
    {nome: 'Provento', id: 1},
    {nome: 'Desconto', id: 2},
    {nome: 'Informativo', id: 3},
    {nome: 'Exclusivo para a empresa', id: 4},
]

export const calculoProporcionalidade = [
    {nome: 'Conforme dia do mes', id: 1},
    {nome: 'Sempre 30 dias', id: 2},
]

export const tipoCalculoHorasExtras = [
    {nome: 'Mes corrente', id: 1},
    {nome: 'Mes anterior', id: 2},
    {nome: 'Dia de corte', id: 3},
]

export const quantidadeParcelasDecimoTerceiro = [
    {nome: 'Uma parcela', id: 1},
    {nome: 'Duas parcelas', id: 2},
]

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
]

export const tiposLancamentoHolerite = [
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
]

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
]

export const periodoRecorrencia = [
    {nome: 'Diariamente', id: 1},
    {nome: 'Semanalmente', id: 2},
    {nome: 'Mensalmente', id: 3},
    {nome: 'Anualmente', id: 4},
]


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
]


export const tiposCorRaca = [
    {nome: 'Indigena', id: 'Indigena'},
    {nome: 'Branca', id: 'Branca'},
    {nome: 'Preta/Negra', id: 'Preta/Negra'},
    {nome: 'Amarela', id: 'Amarela'},
    {nome: 'Parda', id: 'Parda'},
]

export const tiposSexo = [
    {nome: 'Masculino', id: 'Masculino'},
    {nome: 'Femenino', id: 'Femenino'},
]

export const tiposEstadoCivil = [
    {nome: 'Solteiro(a)', id: 'Solteiro(a)'},
    {nome: 'Casado(a)', id: 'Casado(a)'},
    {nome: 'Divorciado(a)', id: 'Divorciado(a)'},
    {nome: 'Viuvo(a)', id: 'Viuvo(a)'},
    {nome: 'Separado(a)', id: 'Separado(a)'},
    {nome: 'Uniao estavel', id: 'Uniao estavel'},
]


export const tiposRecado = [
    {nome: 'Todos', id: 1},
    {nome: 'Importante', id: 2},
    {nome: 'Beneficios', id: 3},
    {nome: 'Politicas', id: 4},
    {nome: 'Movimentacoes', id: 5},
    {nome: 'Confraternizacao', id: 6},
]

export const tiposRelacaoContato = [
    {nome: 'Parente', id: 1},
    {nome: 'Amigo', id: 2},
    {nome: 'Pai', id: 3},
    {nome: 'Mae', id: 4},
    {nome: 'Irmao', id: 5},
    {nome: 'Conjugue', id: 6},
]


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
]

export const tiposCalculoSaldoBeneficio = [
    {
        nome: 'Fixo mensal',
        id: 1,
    },
    {
        nome: 'Dias uteis do mes seguinte',
        id: 2,
    },
    {
        nome: 'Fixo',
        id: 3,
    },
]

export const fechamentoFolhaMesAno = [
    {
        nome: '07/2019',
        id: new Date(2019, 7, 0, 0, 0, 0),
    },{
        nome: '06/2019',
        id: new Date(2019, 6, 0, 0, 0, 0),
    },{
        nome: '05/2019',
        id: new Date(2019, 5, 0, 0, 0, 0),
    },{
        nome: '04/2019',
        id: new Date(2019, 4, 0, 0, 0, 0),
    },{
        nome: '03/2019',
        id: new Date(2019, 3, 0, 0, 0, 0),
    },{
        nome: '02/2019',
        id: new Date(2019, 2, 0, 0, 0, 0),
    },
]


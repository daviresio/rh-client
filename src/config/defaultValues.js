export const MAX_IMAGE_SIZE = 2000000;

export const simNaoOptions = [{nome: 'Sim', id: true}, {nome: 'Nao', id: false}];

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


export const tiposStatusFerias = [
    {nome: 'Pendente', id: 'PENDENTE'},
    {nome: 'Aprovado', id: 'APROVADA'},
    {nome: 'Reprovado', id: 'REPROVADA'},
];

export const tiposDocumentosAssinados = [
    {nome: 'Pendente', id: false},
    {nome: 'Assinado', id: true},
];

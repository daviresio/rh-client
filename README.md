# rh-client

Cliente em react da aplicacao de RH, faz parte de outros projetos integrados, entre eles:

api principal, no qual faz as requiscoes:

https://github.com/daviresio/rh-server

api que consome uma fila do rabbitMQ e processa eventos e atende algumas chamadas de RPC:

https://github.com/daviresio/rh-server-relatorio

static page que tambem consome a api para fazer o logine  cadastro:

https://github.com/daviresio/rh-page


caso queira rodar a aplicacao em sua maquina execute primeiro as duas apis e os 2 clientes web

depois acesse a pagina statica do gatsby em http://localhost:8000 e faca um cadastro (ou logue, caso ja exista um) 
para ser redirecionado para o cliente web, pois `e necessario estar logado para acessa-lo visto que a api na api os registros
sao baseados nao apenas no usuario, mas na empresa selecionada tambem

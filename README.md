# App Front-End de uma Calculadora de Antecipacao

Calculadora de Antecipação é uma aplicação front-end que permite aos clientes calcularem quais valores receberão caso optem por antecipar o recebimento. Integração com API para realização do cálculo.

## Tecnologias

. Linguagem Javascript </br>
. React.Js </br>
. ESlint e Prettier - para padronização e formatação de código </br>
. Vanilla CSS </br>
. LIB: </br>
. React Router DOM </br>  
. Axios </br>
. React Hook Form </br>
. Yup </br>

## API utilizada

Esta aplicação está consumido a API </br>

[Link API Frontend Challenge](https://frontend-challenge-7bu3nxh76a-uc.a.run.app) </br> </br>

/POST </br>

Request: </br>
$ curl --request POST \
----------url https://frontend-challenge-7bu3nxh76a-uc.a.run.app \
----------header 'content-type: application/json' \
----------data '{ </br> \***\*\_\_\*\*** "amount": 15000, </br> \***\*\_\_\*\*** "installments": 3, </br> \***\*\_\_\*\*** "mdr": 4, </br> \***\*\_\_\*\*** "days": [30, 60, 90] </br> \***\*\_\_\*\*** }' </br>

Response: </br>
**\_\_\_** {"30":13824,"60":14208,"90":14400}

## Inicializando a aplicação

Para utlizar esta aplicação basta clonar o repositório. </br>
Em seguida utilize os seguintes comandos pela linha de comando: </br>
$ yarn </br>
$ yarn start </br>

## Documentação da Aplicação

O MCV desta documentação segue o padrão: </br>
--- src </br>
------ tests </br>
------ components </br>
------ pages </br>
------ routes </br>
------ services </br>

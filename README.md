# App Front-End de uma Calculadora de Antecipação

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
 
[Link API Frontend Challenge](https://frontend-challenge-7bu3nxh76a-uc.a.run.app) </br>  </br> 

/POST </br> 

Request: </br>
 $ curl --request POST \
----------url https://frontend-challenge-7bu3nxh76a-uc.a.run.app \
----------header 'content-type: application/json' \
----------data '{ </br>
__________  "amount": 15000, </br>
__________  "installments": 3, </br>
__________  "mdr": 4, </br>
__________  "days": [30, 60, 90] </br>
__________ }' </br>

Response: </br>
_______ {"30":13824,"60":14208,"90":14400}

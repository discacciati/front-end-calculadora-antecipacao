# App Front-End de uma Calculadora de Antecipação

Calculadora de Antecipação é uma aplicação front-end que permite aos clientes calcularem quais valores receberão caso optem por antecipar o recebimento. Integração com API para realização do cálculo.

## Tecnologias

. Linguagem Javascript </br> 
. React.Js </br> 
. ESlint e Prettier - para padronização e formatação de código </br> 
. LIB: </br> 
. React Router DOM </br> 
. Styled Components </br> 
. Axios </br> 
. React Hook Form </br> 
. Yup </br> 
. React Toastify </br> 

## API utilizada

Esta aplicação está consumido a API </br> 

[Link API Frontend Challenge](https://frontend-challenge-7bu3nxh76a-uc.a.run.app) </br>  </br> 

/POST </br> 

Request: </br>
 $ curl --request POST \
        --url https://frontend-challenge-7bu3nxh76a-uc.a.run.app \
        --header 'content-type: application/json' \
        --data '{ </br>
        "amount": 15000, </br>
        "installments": 3, </br>
        "mdr": 4, </br>
        "days": [30, 60, 90] </br>
      }' </br>

Response: </br>
      {"30":13824,"60":14208,"90":14400}

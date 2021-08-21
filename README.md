# IOUU - priceTableCalc (API priceTableCalc) - Repository

![IOUU](./assets/iouu-logo.jpg)

## :triangular_flag_on_post: Starting

The project was created from the boilerplate developed and maintained by [Douglas Dennys](https://github.com/doga10/clean-architecture-node), where it was used NodeJs + TypeScript + TDD + Clean Architecture.

## :checkered_flag: Dependencies

- Node: 14.15.0
- npm: 6.14.8
- Docker: 20.10.2
- Git 2.28.0.windows.1

To use this repository, follow the steps:

> git clone <https://github.com/wlfonseca/iouu-challenge.git>\
> cd iouu-challenge\
> npm install\
> docker compose up

## :ledger: Description

1- A tabela de preços foi construída para simulação de financiamento.
A definição dos parâmetros que serão usados a fim de calcular os valores das parcelas do financiamento foram idealizados com base no disposto deste link :
<http://www.drcalc.net/price.asp?it=5&ml=Calc>

2 - 
Para a realização do recálculo das parcelas após a realização de pelo menos um dos pagamentos será realizada considerando a parcela paga e gerando uma nova lista
de parcelas considerando a última parcela paga, uma vez que não foi contemplado o pagamento antecipado de parcelas, mantendo a sequência exata dos pagamentos.

### <p style="font-size:30px; font-weight:bold;"><img style="position:relative; top:-4px;" src="./assets/swagger-logo.png" height="30" align="center" /> &nbsp;Documentation</p>

A documentação disposta em swagger estará visível logo que da inicialização do serviço localmente no endereço : (http: // localhost: 8080 / api-docs).
Seguindo o padrão de nomenclatura da comunidade de desenvolvimento.
## :bust_in_silhouette: Autor

### Wellington Fonseca

---


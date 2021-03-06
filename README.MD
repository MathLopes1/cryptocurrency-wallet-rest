
<h1> API - CARTEIRA DE CRIPTOMOEDAS </h1>
<p>
API Rest utilizando a ORM sequelize para o desenvolvimento de uma carteira de cripto.<br>
</p>


## Tecnologias Utilizadas:


<table>
  <tr>
    <td>Node.Js</td>
    <td>MySQL</td>
    <td>Postman</td>
  </tr>
  <tr>
    <td>16.13</td>
    <td>8.0</td>
    <td>9.6</td>
  </tr>
</table>

#### Para obter sucesso em rodar a API, é necessário a instalação das tecnologias utilizadas. <br>
 Segue alguns vídeos curtos para caso tinham dificuldades na instalação:
* <a href="https://www.youtube.com/watch?v=CWKLVapcnCU&list=PLNuUvBZGBA8kMTSPMmmNiRm2z0gRxXxox&index=3">Instalação Postman</a> 
* <a href="https://www.youtube.com/watch?v=42QuY7rfLTU&list=PLNuUvBZGBA8kMTSPMmmNiRm2z0gRxXxox&index=6">Instalação Node.Js/NPM </a> 
* <a href="https://www.youtube.com/watch?v=zpssr3u1EO8">Instalação MySql</a> 

### EXECUÇÃO
1. É necessário clonar esse repositório em sua máquina, utilizando o Comando: <br>
`git clone https://github.com/MathLopes1/api-challenger-cryptocurrency-wallet.git` 
2. Utilizar uma IDE para acessar o código. Recomendo o VScode.<br>
<a href="https://code.visualstudio.com/">Instalação VsCode</a>

 OBS: No arquivo default.json da pasta config coloque as informações do seu banco de dados para obter sucesso.
 ![hyyy](https://user-images.githubusercontent.com/70352508/147421603-ea796b91-dc25-4549-92b9-a6fc0b9911f4.PNG)


## Foi utilizado O NPM para instalação de alguns pacotes.
As ferramentas foram:
* Express
* Body-parser
* Express
* MySql2
* Sequelize
* Sequelize-cli
* Path

Utilize o `npm install` para instalar os pacotes
  
## Comandos:

1. Rode o comando `npx sequelize-cli db:migrate` para criar as tabelas no bando de dados
2. Rode o comando `npx sequelize-cli db:seed:all` para alimentar as tabelas com informações do arquivo semente.

## Rotas

A seguir está uma configuração genérica de local host na porta 3000:

- Listagem Wallets - GET: localhost:3000/api/v1/wallet

   . É possível a listagem por parametros, infelizmente o parametro de moedas eu não consegui desenvolver, porém, o resto foi.
   
- Adicionar Wallet - POST: localhost:3000/api/v1/wallet/
  
  . Adiciona uma carteira ao banco de dados, sendo necessário inserir as informações corretamente. O Adress é gerado automaticamente.
  
- Buscar Carteira por adress - GET: localhost:3000/api/v1/wallet/{adress}

  . Utiliza o adress gerado automaticamente quando a wallet é criada, e retorna o arquivo no formato JSON com sucesso caso exista.
  
- Atualizar Wallet por adress - PUT: localhost:3000/api/v1/wallet{adress}

   . Utilizar o adress para atualizar determinada wallet, caso não exista o adress correspodente, retornará um erro.

- Histórico de transações por moedas - GET: localhost:3000/api/v1/wallet/{adress}/transaction

   . Retornará o histórico de de transações de uma determinada moeda na carteira.
   
- Deletar Wallet - DELETE: localhost:3000/api/v1/wallet/{adress}

   . Remove a Wallet utilizando o adress. Lembrando que não é possível excluir uma wallet ligada as moedas.





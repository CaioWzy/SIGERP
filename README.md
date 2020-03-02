# SIGERP

Esta é uma aplicação SPA feita com Nuxt.JS + Backend em Django.  
A tela de batida de ponto de usuário ainda falta bem como também a implementação total (CRUD) do cadastro e pesquisa de escalas.  
  
O Nuxt.js é um framework baseado no Next.js para Vue, tornando o ecossistema o mais próximo do React, motivo pelo qual escolhi este framework além de ser o único com um pouco de experiência prévia. O Objetivo final era desenvolver totalmente a aplicação, mas obtive muita dificuldade com a manipulação de eventos e Vuex (equivalente ao Redux do React), infelizmente a documentação neste sentido é muito ruim, a comunidade é pequena, os erros não são claros e há pouquíssima informação a respeito nas comunidades, tornando o desenvolvimento desta aplicação muito arduoso. O React não foi escolhido antes por ser uma biblioteca mais complexa e não ter trabalho com ele diretamente.  

Apesar de todas as dificuldades encontradas, tentei implementar o máximo de funções além do solicitado, que foi apenas desenvolver o Front end. Tentei visualizar o problema como o usuário do sistema e tornar a interface mais simples e amigável possível.  
  
Foi utilizado CSS puro seguindo o pattern BEM e o desenvolvimento da aplicação Vue girou em todo do state management pattern. Boa parte do tempo foi investida em refatoração. 


## Instalação

``` bash
$ yarn install
$ yarn dev
$ yarn build
$ yarn start
$ yarn generate
# Defina o endereço da API na variável ambiente
export API_BASE_URL="https://sigerp-api..." 
```  
  

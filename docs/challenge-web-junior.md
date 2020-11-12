## O Desafio

O desafio consiste em criar uma aplicação web (React) que permita a navegação entre 2 telas, são elas:

- Home do site em que são listados todos os produtos;
- Página de detalhes de um produto, onde seja possível editar os campos daquele determinado produto;

Na home, ao clicar em um produto, o usuário deve ser redirecionado para a página de detalhe do produto. Ao chegar no fim da listagem, deverão ser carregados mais produtos (scroll infinito). Também deverão ser tratados o casos: produto sem imagem e produto com preço promocional.

Na tela de detalhe do produto, o usuário deve poder editar o estoque, os preços do produto e a cubagem (dimensões do produto). Essa mudança deve refletir na listagem, caso seja necessário.

Montamos um layout mobile first para ser seguido, segundo os critérios acima: [Link para o layout](https://www.figma.com/file/xyiC1zEYS117UdFX6uMqxt/?node-id=0%3A1)

Fica a seu critério como será a versão desktop do layout.

Essa é a base do desafio, você pode nos surpreender com quaisquer detalhes que quiser :D

## Assets

Utilizar a fonte fornecida e o placeholder de imagem na pasta `assets`.

## API

Você irá consumir uma API GraphQL que irá fornecer os dados do arquivo `db/index.js`. Para subir essa API, basta instalar as dependências deste repositório e rodar o comando:

`$ yarn database`

A API roda por padrão em http://localhost:3000/, caso você queira rodar em outra porta basta passar o parâmetro no comando acima:

`$ yarn database --p <nova porta>`

## O que nós esperamos do seu desafio

- Utilizar React;
- Utilizar componentes funcionais com [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html);
- Utilizar [Apollo Client](https://www.apollographql.com/docs/react/) para realizar as consultas à API;
- **Não utilizar** bibliotecas de componentes/design system como Bootstrap, Material UI, etc;
- Aplicação dividida em componentes claros, de responsabilidade única e facilmente reutilizáveis;
- Consulta (query **allSkus**) e atualização (mutation **updateSku**) de produtos;
- Tratamento adequado de possíveis erros;

## O que avaliaremos do seu desafio

- Histórico de commits do git;
- As instruções de como rodar o projeto;
- Organização, semântica, estrutura, legibilidade, manutenibilidade do seu código;
- Componentização e extensibilidade dos componentes Javascript;
- **Todos** os objetivos propostos acima deverão ser atendidos;

## O que nos impressionaria (famoso bônus)

- Utilizar [Git Flow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow);
- Utilizar [Typescript](https://www.typescriptlang.org/);
- Estilização CSS-in-JS com [Styled components](https://styled-components.com/) ou [Emotion](https://emotion.sh/docs/introduction);
- Layout responsivo para mobile e desktop;
- Utilizar a consulta de um produto específico (query **Sku**) na tela de detalhe;
- [Manipulação de cache](https://www.apollographql.com/docs/react/caching/cache-interaction/) das requisições com Apollo Client;
- Testes unitários e de integração com [Jest](https://jestjs.io/docs/en/tutorial-react)) e [Testing Library](https://testing-library.com/docs/react-testing-library/intro/);
- Testes E2E (ex. [Cypress](https://www.cypress.io/));
- i18n;
- Tematização;

## Dicas

### DO

- Componentes pequenos e claros;
- Features do ES6 que simplificam o código, como object destructuring, rest operator, etc;
- Se você tiver disponibilidade, teste sua aplicação em Android e iOS, mas pode ficar tranquilo, isso não é requisito, garanta que esteja tudo ok na plataform que você conseguir desenvolver;
- Qualquer dúvida sobre o desafio pode entrar em contato com a gente;

### DON'T

- Código duplicado;
- Funções/Classes longos demais;
- Muitos if/else;
- Uso de estruturas de dados inadequados;
- Funções/métodos com muitos parâmetros;
- Console.log no envio final;
- Retornar estado de erro em vez de levantar exceção;

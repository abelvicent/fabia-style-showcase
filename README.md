# Fabia Style Showcase

Crie um site moderno, elegante e responsivo para uma loja de roupas chamada Fabia Multimarcas.

O projeto deve funcionar inicialmente como uma landing page de loja online, mas deve ser desenvolvido com uma estrutura organizada e escalável, permitindo futuramente cadastrar novos produtos, alterar fotos, preços, descrições, categorias e estoque sem precisar modificar várias partes do código.

1. Identidade da loja

Nome: Fabia Multimarcas

Segmento: Loja de roupas e moda multimarcas.

A identidade visual deve transmitir:

Elegância

Modernidade

Sofisticação

Credibilidade

Sensação de uma loja de moda profissional

O design deve ser limpo, sofisticado e visualmente agradável, evitando aparência de template genérico.

Utilize uma paleta de cores elegante e tipografia moderna.

O site deve ser totalmente responsivo para computador, tablet e celular.

2. Estrutura do site

Criar as seguintes páginas:

Início

Masculino

Feminino

Produto

Contato

3. Página inicial

Criar uma landing page com um Header contendo:

Logo/nome "Fabia Multimarcas"

Início

Masculino

Feminino

Contato

Ícone de pesquisa

Ícone de carrinho, deixando a estrutura preparada para implementação futura

No celular, utilizar menu hamburger.

Banner principal

Criar um banner grande e elegante relacionado ao universo da moda.

Texto:

FABIA MULTIMARCAS

"Moda, estilo e personalidade."

Botão:

Ver coleção

A imagem do banner deve ficar em um local fácil de substituir posteriormente.

4. Categorias

Criar uma seção apresentando:

Masculino

Feminino

Cada categoria deve possuir:

Imagem

Nome

Pequena descrição

Botão "Ver coleção"

Ao clicar, o usuário deve ser direcionado para a respectiva página.

5. Produtos em destaque

Criar uma seção:

Produtos em destaque

Cada produto deve apresentar:

Foto

Nome

Marca

Categoria

Preço

Botão "Ver produto"

Os produtos não devem ficar escritos diretamente dentro dos componentes.

Criar uma estrutura centralizada de dados, como:

products.js

ou

products.json

Cada produto deve possuir informações semelhantes a:

id
nome
marca
categoria
descricao
preco
imagem
imagens
tamanhos
disponibilidade


Exemplo:

{
    id: 1,
    nome: "Camisa Casual",
    marca: "Marca Exemplo",
    categoria: "masculino",
    descricao: "Camisa casual moderna e confortável.",
    preco: 89.90,
    imagem: "/images/produtos/camisa-casual.jpg",
    tamanhos: ["P", "M", "G", "GG"],
    disponibilidade: true
}


A estrutura deve permitir adicionar um produto novo simplesmente adicionando outro objeto à lista.

6. Página Masculino

Criar uma página exclusiva:

Moda Masculina

Mostrar automaticamente todos os produtos cuja categoria seja:

masculino

Criar filtros para:

Todos

Camisas

Calças

Shorts

Outros

Preparar a estrutura para futuramente adicionar filtros de:

Marca

Tamanho

Preço

Categoria

7. Página Feminino

Criar uma página:

Moda Feminina

Mostrar automaticamente todos os produtos cuja categoria seja:

feminino

Filtros:

Todos

Blusas

Calças

Vestidos

Shorts

Outros

Também preparar filtros futuros por:

Marca

Tamanho

Preço

Categoria

8. Página do produto

Ao selecionar um produto, abrir uma página individual.

Mostrar:

Foto principal grande

Galeria de fotos

Nome

Marca

Categoria

Descrição

Preço

Tamanhos disponíveis

Disponibilidade

Botão "Tenho interesse"

O botão "Tenho interesse" deve abrir o WhatsApp da loja com uma mensagem automaticamente preenchida.

Exemplo:

"Olá! Tenho interesse no produto Camisa Casual, da marca Marca Exemplo."

O número do WhatsApp deve ficar em um arquivo de configuração separado para facilitar sua alteração.

9. Página de contato

Criar uma página:

Entre em contato

Mostrar:

WhatsApp

Instagram

E-mail

Endereço

Horário de atendimento

Criar formulário com:

Nome

E-mail

Telefone

Mensagem

Botão "Enviar"

Também deixar espaço preparado para adicionar futuramente um mapa com a localização da loja.

10. Informações da loja

Criar um arquivo separado, como:

storeConfig.js

Nele devem ficar:

nome
whatsapp
instagram
email
endereco
horario


Assim, todas as informações da loja poderão ser alteradas em um único lugar.

11. Organização das imagens

Organizar as imagens de maneira simples:

/public
    /images
        /banner
        /produtos
        /categorias


As imagens dos produtos devem ser referenciadas pelos dados de cada produto.

Isso deve permitir substituir uma foto sem precisar alterar o layout da página.

12. Futuro painel administrativo

Não é necessário criar o painel administrativo agora.

Porém, a arquitetura deve ser preparada para futuramente permitir:

Cadastrar produto

Editar produto

Excluir produto

Alterar nome

Alterar marca

Alterar preço

Alterar descrição

Alterar fotos

Alterar categoria

Alterar tamanhos

Alterar disponibilidade

Controlar estoque

O objetivo é que posteriormente o proprietário consiga administrar a loja sem precisar editar o código manualmente.

13. WhatsApp

Adicionar um botão flutuante do WhatsApp no canto inferior da tela.

Ao clicar, abrir uma conversa com a loja.

Também utilizar o WhatsApp nos produtos através do botão "Tenho interesse".

Deixar o número configurado em apenas um local do projeto.

14. Design

O visual deve ser:

Minimalista

Elegante

Sofisticado

Moderno

Profissional

Responsivo

Utilizar imagens grandes e de boa qualidade.

Adicionar animações suaves apenas quando contribuírem para a experiência.

Utilizar efeitos discretos de hover nos produtos e botões.

Não exagerar nas animações.

15. Experiência mobile

O site deve ser pensado primeiro para funcionar bem em celulares.

No celular:

Menu hamburger

Grid de produtos responsivo

Imagens adaptáveis

Botões grandes e fáceis de tocar

Texto legível

WhatsApp acessível

Navegação simples

16. Estrutura técnica

Organizar o projeto separando:

/components
/pages
/data
/config
/public/images
/styles
/utils


Evitar código duplicado.

Evitar colocar produtos diretamente dentro das páginas.

Evitar informações da loja espalhadas pelo código.

Criar componentes reutilizáveis para:

Header

Footer

ProductCard

ProductGrid

CategoryCard

WhatsAppButton

ProductGallery

17. Preparação para evolução

A primeira versão não precisa possuir:

Login

Pagamento online

Checkout

Banco de dados

Painel administrativo

Porém, a estrutura deve permitir adicionar essas funcionalidades futuramente.

A primeira versão será focada em apresentar a Fabia Multimarcas, divulgar os produtos e direcionar clientes para o WhatsApp.

Utilize produtos e imagens fictícios para demonstração.

O resultado final deve parecer uma loja de moda multimarcas real, elegante e profissional, e não apenas uma página genérica de demonstração.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bb9de48f-f7ac-503a-803d-339f88acb34e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

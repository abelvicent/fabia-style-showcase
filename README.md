# Fabia Multimarcas

Site institucional e vitrine online da **Fabia Multimarcas**, loja de roupas multimarcas parceira do projeto Fashion AI. O site apresenta a loja, organiza o catálogo por categoria e direciona clientes para o atendimento via WhatsApp.

## Funcionalidades

- Página inicial com banner, categorias e produtos em destaque
- Catálogos **Masculino** e **Feminino** com filtros por tipo de peça
- Página de produto com galeria, tamanhos, disponibilidade e botão "Tenho interesse" (mensagem pré-preenchida no WhatsApp)
- Página de contato com dados da loja, formulário e espaço reservado para mapa
- Botão flutuante de WhatsApp (exibido quando o número estiver configurado)
- Menu responsivo com navegação mobile
- Metadados de SEO por página

## Tecnologias

- React 19 + TypeScript
- TanStack Start / TanStack Router (roteamento por arquivos e SSR)
- TanStack Query
- Vite
- Tailwind CSS v4
- Radix UI (menu lateral) e lucide-react (ícones)
- ESLint e Prettier

## Estrutura do projeto

```text
public/
  images/
    banner/       Imagem do banner principal
    categorias/   Imagens das categorias
    produtos/     Fotos dos produtos
src/
  assets/         Logotipo
  components/
    store/        Componentes da loja (Header, Footer, ProductCard, ...)
    ui/           Componentes base (Button, Sheet)
  config/
    storeConfig.ts  Dados da loja (nome, CNPJ, WhatsApp, contatos, horário)
  data/
    products.ts     Catálogo de produtos
  lib/            Utilitários internos (classes CSS, tratamento de erros)
  routes/         Páginas (/, /masculino, /feminino, /produto/$id, /contato)
  utils/          Funções auxiliares (formatação de preços)
  styles.css      Tema, cores e estilos globais
```

## Como alterar o conteúdo

- **Dados da loja:** edite `src/config/storeConfig.ts`. Campos não informados ficam `null` e não aparecem no site.
- **Produtos:** adicione um objeto ao array `products` em `src/data/products.ts` e coloque as fotos em `public/images/produtos/`.

## Instalação

Requer Node.js 20+ ou Bun.

```bash
bun install   # ou: npm install
```

## Execução

```bash
bun run dev   # servidor de desenvolvimento
```

## Build

```bash
bun run build     # gera a versão de produção
bun run preview   # pré-visualiza o build
```

Outros comandos: `bun run lint` e `bun run format`.

# IBI

Protótipo de marketplace para descobrir produtos e serviços ligados às tradições afro-brasileiras. O projeto busca conectar clientes, lojas e casas/terreiros, oferecendo uma experiência simples, acessível e respeitosa.

> Este projeto é uma demonstração de interface. O catálogo utiliza dados estáticos e algumas funcionalidades, como pedidos, pagamentos e entregas, ainda não estão conectadas ao backend.

## Funcionalidades

- Explorar produtos e serviços disponíveis.
- Pesquisar produtos.
- Filtrar produtos por categoria.
- Consultar lojas e casas/terreiros.
- Visualizar informações dos produtos.
- Adicionar produtos aos favoritos.
- Adicionar e remover produtos do carrinho.
- Alterar a quantidade de itens no carrinho.
- Visualizar a quantidade de itens e o subtotal do carrinho.
- Navegar entre as principais áreas da aplicação.
- Interface responsiva para diferentes tamanhos de tela.

## Tecnologias

- React 19
- Vite 8
- Tailwind CSS 4
- Lucide React
- JavaScript

## Requisitos

- Node.js 20.19 ou superior, ou 22.12 ou superior
- npm
- Git

## Como executar

Clone o repositório:

```bash
git clone https://github.com/GM20837/IBI-Front-end.git
```

Entre na pasta do projeto:

```bash
cd IBI-Front-end
```

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O Vite informará no terminal o endereço local para acessar a aplicação.

Para gerar a versão de produção:

```bash
npm run build
```

Para visualizar a versão de produção localmente:

```bash
npm run preview
```

Para verificar o código com ESLint:

```bash
npm run lint
```

## Estrutura do projeto

```text
src/
├── assets/        # Imagens, ícones e outros arquivos estáticos
├── components/    # Componentes reutilizáveis da aplicação
├── pages/         # Páginas da aplicação
├── routes/        # Rotas e navegação
├── services/      # Serviços e comunicação com APIs
├── styles/        # Estilos e arquivos de configuração visual
├── App.jsx        # Componente principal da aplicação
├── index.css      # Estilos globais
└── main.jsx       # Inicialização do React

public/            # Ícones e arquivos públicos
```

## Scripts disponíveis

| Comando | Ação |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com atualização rápida. |
| `npm run build` | Gera os arquivos de produção em `dist/`. |
| `npm run preview` | Serve localmente a compilação de produção. |
| `npm run lint` | Executa o ESLint nos arquivos do projeto. |

## Sobre o projeto

O IBI está sendo desenvolvido como um marketplace web responsivo, com o objetivo de aproximar clientes, lojas, casas/terreiros e entregadores em uma única plataforma.

A aplicação está atualmente em desenvolvimento, com foco inicial na construção da interface e experiência do usuário.

Novas funcionalidades serão adicionadas conforme a evolução do projeto e a integração com o backend.

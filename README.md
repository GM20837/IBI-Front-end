# IBI

Marketplace para descobrir produtos e serviços ligados às tradições afro-brasileiras, conectando clientes, lojas, casas/terreiros e entregadores em uma experiência digital simples, respeitosa e acessível.

A interface foi pensada para dispositivos móveis e apresenta uma experiência de navegação com catálogo, busca, favoritos e carrinho.

> Este projeto está em desenvolvimento. Atualmente, a aplicação utiliza dados estáticos e algumas funcionalidades ainda não estão conectadas a um backend, sistema de pagamento ou serviço de entrega.

## Funcionalidades

- Explorar produtos disponíveis na plataforma.
- Filtrar produtos por categoria e texto.
- Consultar lojas e casas/terreiros cadastrados.
- Visualizar informações dos produtos e comerciantes.
- Salvar produtos favoritos.
- Adicionar e remover produtos do carrinho.
- Visualizar a quantidade de itens e o subtotal do carrinho.
- Navegar entre início, lojas, produtos salvos e carrinho.
- Interface responsiva para dispositivos móveis.

Os dados utilizados atualmente são estáticos e o estado do carrinho e dos favoritos é mantido localmente durante a sessão.

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
Acesse a pasta do projeto:
cd IBI-Front-end
Instale as dependências:
npm install
Inicie o servidor de desenvolvimento:
npm run dev
O Vite informará no terminal o endereço local para acessar a aplicação.
Para gerar a versão de produção:
npm run build
Para visualizar a versão de produção:
npm run preview
Para verificar o código com ESLint:
npm run lint

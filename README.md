# Simulador de Leads

Este projeto é um simulador que recolhe dados de clientes para tratá-los como possíveis contratantes (leads). O simulador permite o preenchimento de informações do cliente, cônjuge (se houver), dados do imóvel a ser financiado e endereço atual. A aplicação é desenvolvida utilizando **Vite**, **TailwindCSS** e **ShadCN**.

## Tecnologias Utilizadas

- [Vite](https://vitejs.dev/) - Ferramenta de construção de frontend rápido.
- [React](https://reactjs.org/) - Biblioteca para construção de interfaces de usuário.
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS para estilização.
- [ShadCN](https://shadcn.dev/) - Componentes UI reutilizáveis.
- [Mockable IO](https://www.mockable.io/) - Para simulação de requisições de API durante o desenvolvimento.

## Funcionalidades

- **Formulários não sequenciais**: Os usuários podem preencher as informações em qualquer ordem.
- **Salvamento progressivo**: Os dados são salvos automaticamente no `localStorage` à medida que o usuário preenche os formulários.
- **Limpeza dos dados**: Os usuários podem limpar todos os dados do formulário a qualquer momento.
- **Integração com API mockada**: Utiliza o mockable.io para simular chamadas de API, permitindo o teste sem depender de um servidor real.

## Instalação

Para instalar o projeto, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://seu-repositorio.git
   cd simulador
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

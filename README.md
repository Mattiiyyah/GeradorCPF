# Gerador de CPF Válido

Este é um projeto simples desenvolvido como parte de um curso de programação, com o objetivo de criar uma aplicação web que gera números de CPF (Cadastro de Pessoas Físicas) válidos.

---

## 📋 Descrição do Projeto

A aplicação consiste em uma única página web que exibe um número de CPF formatado e um botão.  
Ao carregar a página, um novo CPF válido é gerado e exibido.  
Ao clicar no botão **"Gerar CPF"**, a página é atualizada, gerando um novo número.

Este projeto foi construído para praticar e demonstrar conceitos de:

- Manipulação do DOM com JavaScript puro.  
- Modularização de código em JavaScript (ES6 Modules).  
- Utilização de algoritmos para geração de dígitos verificadores.  
- Estruturação básica de um projeto front-end com **Webpack**.

---

## ✨ Funcionalidades

- **Geração de CPFs Válidos:** Gera um número de CPF com os dois dígitos verificadores calculados corretamente, garantindo que o número seja matematicamente válido.  
- **Formatação Automática:** O CPF gerado é exibido no formato padrão `XXX.XXX.XXX-XX` para fácil leitura.  
- **Interface Simples:** Uma tela limpa e intuitiva, focada exclusivamente na funcionalidade principal.  
- **Botão para Gerar Novo CPF:** Permite ao usuário gerar um novo CPF a qualquer momento, simplesmente clicando em um botão.

---

## 🚀 Tecnologias Utilizadas

- **HTML5:** Estrutura semântica da página.  
- **CSS3:** Estilização, layout e design responsivo.  
- **JavaScript (ES6+):** Lógica de programação e manipulação da página.  
- **Webpack:** Empacotador de módulos para organizar e compilar o código JS e CSS em arquivos estáticos (`bundle.js`) para o navegador.

---

## 📂 Estrutura do Projeto

O código-fonte está organizado da seguinte forma:

```bash
/
├── public/                 # Arquivos públicos, prontos para serem servidos
│   ├── assets/
│   │   ├── js/
│   │   │   └── bundle.js       # Código JS compilado pelo Webpack
│   └── index.html              # Arquivo principal da aplicação
│
└── src/                    # Código-fonte do projeto
    ├── assets/
    │   └── css/
    │       └── style.css       # Arquivo de estilos
    ├── modules/
    │   ├── GeraCPF.js          # Módulo responsável por gerar o CPF
    │   └── ValidaCPF.js        # Módulo com a lógica de cálculo dos dígitos
    └── main.js                 # Ponto de entrada da aplicação JS

```
* A pasta `src` contém todo o código original que foi desenvolvido.
* A pasta `public` contém a versão final da aplicação, que pode ser aberta diretamente no navegador.

---

## 🛠️ Como Usar

Para visualizar o projeto, basta seguir estes passos:

1.  Clone este repositório para a sua máquina local.
2.  Navegue até a pasta `public`.
3.  Abra o arquivo `index.html` no seu navegador de preferência.

A página será carregada com um CPF novo e válido.

### Para Desenvolvedores

Se você deseja modificar o código-fonte:

1.  Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2.  Instale as dependências do projeto (execute `npm install` no terminal).
3.  Faça as alterações desejadas nos arquivos dentro da pasta `src`.
4.  Execute o script do Webpack (geralmente `npm run build` ou similar) para gerar o novo `bundle.js`.

---

## 🧠 Como Funciona a Geração

O processo de geração de um CPF válido segue o algoritmo oficial:

1.  **Geração da Base**: Um número aleatório de 9 dígitos é gerado para servir como a base do CPF.
2.  **Cálculo do Primeiro Dígito Verificador**: Com base nos 9 dígitos iniciais, o primeiro dígito verificador é calculado usando um algoritmo de pesos (multiplicando cada dígito de 10 a 2).
3.  **Cálculo do Segundo Dígito Verificador**: O segundo dígito é calculado de forma similar, mas desta vez utilizando os 9 dígitos iniciais mais o primeiro dígito verificador recém-calculado (com pesos de 11 a 2).
4.  **Formatação**: O CPF completo (9 dígitos base + 2 dígitos verificadores) é então formatado com pontos e traço para exibição.
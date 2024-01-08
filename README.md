### Ecommerce-store

<p align='center'>
<b height="50%" width="50%"></b>
</p>

<p align="center">
    <img alt="Platform" src="https://img.shields.io/static/v1?label=Platform&message=PC&color=030712&labelColor=262626">
    <img alt="project name" src="https://img.shields.io/badge/Ecommerce-store-030712?&labelColor=262626"></img>    
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/GabrielMedradoS/Ecommerce-store?color=030712&labelColor=262626">
    <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/gabrielmedrados/Ecommerce-store?&color=030712&labelColor=262626">    
    <a href="">
        <img alt="License" src="https://img.shields.io/static/v1?label=License&message=MIT&color=030712&labelColor=262626">
    </a>
</p>

<p align="center">
    <a href="#-objetivo">Objetivo</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-features">Features</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-demonstração">Demonstração</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-tecnologias">Tecnologias</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-documentação">Documentação</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="LICENSE">License</a> &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
    <a href="#-autor">Autor</a> 
</p>

## 📷 Layout

#### Screenshot:

<div align='center'>
<img src=".github/github image.png"/>
</div>

## 🎯 Objetivo

Criaçao de um site onde é possivel criar sua propria Loja e disponibilizar seus produtos. O sistema contem desde a seleçao de pedidos contendo itens do produtos escolhido e colocando no seu carrinho de compras, forma de pagamento e autenticaçao.
O projeto é um site de Ecommerce que exibe os produtos usando a **API** disponivel no repositorio **Ecommerce-admin**

## ✨ Features

- [x] Layout de um Ecommerce
- [x] Layout responsivo e dinâmico
- [x] Processamento de dados de API externa (repositorio **Ecommerce-admin**)
- [x] Funcionalidades de um site Ecommerce como: Display de Loja, Produto, Imagem ...
- [x] Adicionar item ao carrinho
- [x] Exibição detalhada ao apontar o cursor no produto
- [x] Dark Mode 

## 💻 Demonstração:

https://github.com/GabrielMedradoS/Ecommerce-store/assets/73303001/7aa88717-5d5d-459b-a9fd-2b9607fd31cd

## 🚴🏻‍♂️ Rodar o projeto

Para baixar o código-fonte do projeto em sua máquina, primeiramente terá que ter instalado o [**Git**](https://git-scm.com/).
Com o Git instalado, em seu terminal execute o seguinte comando:

```bash
git clone https://github.com/GabrielMedradoS/Ecommerce-store.git
```

Para instalar as dependências e executar o projeto terá que ter instalado em sua máquina o [**node.js**](https://nodejs.org/en/), que vem acompanhado do npm.

> Nesse projeto foi utilizado o [**pnpm**](https://pnpm.io/), que busca economizar espaço em disco e acelerar a instalação de pacotes devido à sua abordagem de armazenamento de dependências compartilhado.

Instale as dependências usando **pnpm** ou **npm**:

```bash
# pnpm
pnpm install
```

```bash
# npm
npm install
```

Crie o arquivo .env com as variáveis de ambiente necessárias:

```bash
NEXT_PUBLIC_API_URL="Minha Loja disponibilizada pela key no repositorio ecommerce-admin"
```

Execute o projeto:

```bash
# pnpm
pnpm run dev
```

```bash
# npm
npm run dev
```

O servidor estará disponível em http://localhost:3000.

## 🛠 Tecnologias

<div>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" height="30" width="40"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
  alt="typescript" height="30" width="40"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="tailwind" height="30" width="40" />
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/>
</div>

## 📜 Documentação

#### 👇 Clique para ver as Dependencias do projeto

<details>
    <summary>Dependencies</summary>

```json
{
  "name": "ecommerce-store",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@headlessui/react": "^1.7.17",
    "axios": "^1.6.3",
    "clsx": "^2.0.0",
    "lucide-react": "^0.302.0",
    "next": "14.0.4",
    "next-themes": "^0.2.1",
    "query-string": "^8.1.0",
    "react": "^18",
    "react-dom": "^18",
    "react-hot-toast": "^2.4.1",
    "tailwind-merge": "^2.2.0",
    "zustand": "^4.4.7"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.0.4",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}
```

</details>

- [Next.js 13 | documentation](https://nextjs.org/docs)
- [Tailwind | documentation](https://tailwindcss.com/docs/installation/using-postcss)
- [Query-string | documentation](https://www.npmjs.com/package/query-string)
- [Headlessui/react](https://headlessui.com/)
- [Zustand | documentation](https://zustand-demo.pmnd.rs/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Axios | documentation](https://axios-http.com/ptbr/docs/intro)

## 💡 Como contribuir

- Faça um **_fork_** desse repositório;
- Crie um **branch** para a sua feature: `git checkout -b minha-feature`;
- Faça um **commit** com suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça um **push** para o seu branch: `git push origin minha-feature`;
- Faça um **pull request** com sua feature;

Pull requests são sempre bem-vindos. Em caso de dúvidas ou sugestões, crie uma _**issue**_ ou entre em contato comigo.

## ⚖️ License

This project is under the MIT license. See the archive [LICENSE](https://github.com/GabrielMedradoS/Ecommerce-store/blob/master/LICENSE) for more details.

## ✍🏾 Autor

| <a href="https://github.com/gabrielmedrados/"><img src="https://user-images.githubusercontent.com/73303001/126536001-655e3cbd-facd-4de1-992f-b8d9d3656ace.jpg" width="100" alt="perfil"/><br>
| :-------------------------: |
| <a href="https://github.com/gabrielmedrados/"> Gabriel Medrado |</a> |

[![Linkedin Badge](https://img.shields.io/badge/-GabrielMedrado-blue?style=flat-square&logo=Linkedin&logoColor=white)](https://www.linkedin.com/in/gabriel-medrado-de-souza-9a30b3206/)
[![Gmail Badge](https://img.shields.io/badge/-gabriel.medradoo@hotmail.com-1769ff?style=flat-square&logo=Gmail&logoColor=white)](mailto:gabriel.medradoo@hotmail.com)

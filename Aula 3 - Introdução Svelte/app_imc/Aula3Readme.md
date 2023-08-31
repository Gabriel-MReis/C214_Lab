# Introdução ao Svelte com um app para calcular IMC

---

# IMC app

Esse é um aplicativo que pede o peso e altura de um usuário e vai retornar seu IMC e como ele está na classificação de acordo com uma tabela de classificação. Também tem uma breve explicação do que é IMC e algumas dica para ter um bom IMC de acordo com sua classificação.

## Criando a aplicação

1. Primeiro eu peguei um template de projeto [Svelte](https://svelte.dev). Que fica em https://github.com/sveltejs/template.

```bash
npx degit sveltejs/template app_imc
cd app_imc
```

2. Instalar dependências

```bash
npm install
```

3. Iniciar aplicação [Rollup](https://rollupjs.org):

```bash
npm run dev
```

4. Navegue para [localhost:8080](http://localhost:8080). Você deve ver seu aplicativo sem executado.

5. Modifiquei o arquivo App.svelte incluindo as funções para cacular o IMC junto com outras funcionalidades.
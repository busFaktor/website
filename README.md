# busfaktor-website


![Bildschirmfoto vom 2022-06-28 08-40-18](https://user-images.githubusercontent.com/1324583/176111033-1e7bee6f-0ec9-4b57-b212-ab84013885d5.png)


This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```


### How To Deploy to Github Pages [busfaktor.github.io/website/](https://busfaktor.github.io/website/)

### Step 1. Set __base__ and __publicPath__ in vite.config.js to our repository name
```sh
export default defineConfig({
  base: "/website/",
  ...
  publicPath: process.env.NODE_ENV === "production" ? "/gh-pages/" : "/",
});
```
### Step 2. Build your project using npm build

### Step 3. Run git add dist && git commit -m 'adding dist subtree'
This commits our changes to the master branch so that we can create a **dist** subtree in the next step. Make sure that dist is not included in your **.gitignore** file!

### Step 4. Run git subtree push --prefix dist origin gh-pages
This step makes **gh-pages** a subtree of our master branch. The prefix option specifies the folder that we want for our the subtree. If we take a look at our gh-pages branch, we will see that it is equivalent to being the root of the dist folder.

### Step 5. Done!

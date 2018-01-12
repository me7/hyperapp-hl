# hyperapp-hl
template for hyperapp hot reload. Inspire from [flems.io](https://github.com/porsager/flems). This is simpler than original one, you should look at flems.io to see more

## Dependency
* use [hyperapp](https://github.com/hyperapp/hyperapp) for virtual DOM library instead of React or Vue.js
* use [rollup](https://rollupjs.org/) for module bundler instead of webpack
* use [buble](https://buble.surge.sh) for transpiler instead of babel
* use [uglify-js](https://github.com/mishoo/UglifyJS) for minify and compress app.js
* use [wright](https://github.com/porsager/wright) to provide hot reload,because it's use Chrome debugging protocol
* use [pnpm](https://github.com/pnpm/pnpm) for package management instead of npm or yarn

## usage
* clone this repo to your PC
* `pnpm install` (or npm install if you're not have pnpm)
* `npm run dev` to run
* edit your file as needed
* `npm run build` once your finish
* output file will in dist folder. file are app.js and index.html

Thanks for all above developer for create these cool tools

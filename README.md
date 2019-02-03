[![MIT License][license]][license-url] [![Stars][stars]][stars-url]

[![AdonisJS][adonisjs]][adonisjs-url] [![Vue][vue]][vue-url] [![Laravel-Mix][laravel-mix]][laravel-mix-url]

## Adonis fullstack application
<p align="center"><img width="390" src="https://raw.githubusercontent.com/VoreCorporation/vuedonara-mix/master/template/public/logo.png"></p>

This is the fullstack boilerplate for AdonisJs, it's already integrated with *Vue* and *Laravel-Mix*. You can use this as a start point for your Adonis + Laravel Mix projects.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds
9. Vue (vuex and vue-router are installed and ready to use, synced with *vue-router-sync*)

### Setup
This is a project template for [vue-cli](https://github.com/vuejs/vue-cli).
```bash
vue init VoreCorporation/vuedonara-mix <project-name>
cd <project-name> # move to your project
mv .env.example .env # Add environment variables for Adonis
npm install # or yarn install
```

The Adonis `start` and `test` commands still there and the following commands are available to handle project assets:

| Command | Description |
|---------|-------------|
| npm run fdev | Compiles assets in development mode. |
| npm run fwatch | Compiles assets in development mode and watches changes. |
| npm run fhot | Compiles assets in development mode with hot reload option activated. |
| npm run fproduction | Compiles assets for production. |

### Migrations
Run the following command to run startup migrations.
```js
adonis migration:run
```

[license-url]: LICENSE
[stars-url]: https://github.com/VoreCorporation/vuedonara-mix/stargazers
[adonisjs-url]: https://github.com/adonisjs
[vue-url]: https://github.com/vuejs/vue
[laravel-mix-url]: https://github.com/JeffreyWay/laravel-mix

[license]: https://img.shields.io/github/license/VoreCorporation/vuedonara-mix.svg?style=flat
[stars]: https://img.shields.io/github/stars/VoreCorporation/vuedonara-mix.svg?style=flat
[adonisjs]: https://img.shields.io/badge/adonisjs-v.4.1.0-blue.svg?style=flat
[vue]: https://img.shields.io/badge/vue-%5E2.5.22-brightgreen.svg?style=flat
[laravel-mix]: https://img.shields.io/badge/laravel--mix-%5E4.0.14-red.svg?style=flat
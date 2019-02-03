[![MIT License][license]][license-url] [![Stars][stars]][stars-url]

[![AdonisJS][adonisjs]][adonisjs-url] [![Vue][vue]][vue-url] [![Laravel-Mix][laravel-mix]][laravel-mix-url]

# Adonis fullstack application
<p align="center"><img width="390" src="https://raw.githubusercontent.com/VoreCorporation/vuedonara-mix/master/public/logo.png"></p>

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

## Requirements
- Node >= 8.*
- Adonis-cli >=  4.1.*

## Install
Create a new project with:

```shell
  adonis new <my-project> --blueprint VoreCorporation/vuedonara-mix
```

> Change `<my-project>` to your project name.


## Usage
The Adonis `start` and `test` commands still there and the following commands are available to handle project assets:

| Command | Description |
|---------|-------------|
| npm run fdev | Compiles assets in development mode. |
| npm run fwatch | Compiles assets in development mode and watches changes. |
| npm run fhot | Compiles assets in development mode with hot reload option activated. |
| npm run fproduction | Compiles assets for production. 

## Development
```bash
npm run fwatch
adonis serve --dev
```

## Production
```bash
npm run fproduction
adonis serve
```

## Migrations
Run the following command to run startup migrations.
```js
adonis migration:run
```

## Documentation
For more information see:
- [AdonisJS](https://adonisjs.com)
- [Vue](https://vuejs.org)
- [Laravel Mix](https://laravel-mix.com/docs)

## License
The code is available at [GitHub][home] under the [MIT license][license-url].

## Contributors
Suggestions and contributions are welcome via Pull Requests.

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars3.githubusercontent.com/u/8052370" width="100px;"/><br /><sub><b>Rully Ardiansyah</b></sub>](https://github.com/orgs/VoreCorporation/people/DeVoresyah)<br />[💻](https://github.com/VoreCorporation/vuedonara-mix/commits?author=DeVoresyah "Code") [📖](https://github.com/VoreCorporation/vuedonara-mix/commits?author=DeVoresyah "Documentation") [💬](#question-devoresyah "Answering Questions") [👀](#review-devoresyah "Reviewed Pull Requests") [💡](#example-devoresyah "Examples") | [<img src="https://avatars.githubusercontent.com/u/13186704?v=3" width="100px;"/><br /><sub><b>Dicky Indra Asmara</b></sub>](https://github.com/dickyindra)<br />[📖](https://github.com/VoreCorporation/vuedonara-mix/commits?author=dickyindra "Documentation") [💬](#question-dickyindra "Answering Questions") [💡](#example-dickyindra "Examples") [✅](#tutorial-dickyindra "Tutorials") | [<img src="https://avatars.githubusercontent.com/u/14852308?v=3" width="100px;"/><br /><sub><b>Edo Rahayu</b></sub>](https://github.com/edorahayu)<br />[🎨](#logo-design "Logo Design") |
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

[home]: https://github.com/VoreCorporation/vuedonara-mix
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
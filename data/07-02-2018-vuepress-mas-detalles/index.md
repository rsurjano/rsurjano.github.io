---
path: '/vuepress-mas-detalles'
title: 'Vuepress, mas detalles'
date: '2017-07-12T17:12:33.962Z'
---

si no has visto el anterior post, te invito a visitarlo: [Vuepress, pasos rapidos para empezar](vuepress-pasos-rapidos-para-empezar.md) o usa el script de instalacion desatendido para acelerar las cosas.

```bash
# Instalacion desatendida de NVM, YARN y configuracion de vuepress

if [ "$(uname)" == "Darwin" ]; then
  # nvm
  brew install nvm
  # yarn
  brew install yarn --without-node
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
  # nvm
  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
  # yarn
  curl -o- -L https://yarnpkg.com/install.sh | bash
fi

# configuracion de nvm
nvm install v9.11.1
nvm use v9.11.1

# vuepress
mkdir vuepress
cd vuepress
yarn add -D vuepress
mkdir pages
echo '# Hola!  VuePress' > pages/README.md

# ejecutando vuepress
./node_modules/.bin/vuepress dev pages
```

<!-- more -->

## Archivo de configuracion

normalmente vuepress usa un archivo `config.js` dentro de la carpeta .vuepress

```bash
cd pages
mkdir .vuepress
cd .vuepress

echo "
module.exports = {
  title: 'Personalizando el titulo',
  description: 'solo otra pagina generada estaticamente'
}
" >> config.js
cd ..
cd ..
```

Veremos los cambios en el titulo de la pagina.

Muy aparte `vuepress` tiene muchos atributos para personalizar si observamos un poco su codigo [link](https://github.com/vuejs/vuepress/blob/master/docs/.vuepress/config.js) y tambien en su documentacion de la guia de [configuracion](https://vuepress.vuejs.org/config/)

```javascript
module.exports = {
  dest: 'vuepress',
  host: '0.0.0.0',
  port: 8080,
  dest: '.vuepress/dist',
  // GOOGLE ANALYTICS
  ga: undefined,
  serviceWorker: false,
  postCss: { plugins: [require('autoprefixer')] },
  stylus: { preferPathResolver: 'webpack' },
  scss: {},
  sass: { indentedSyntax: true },
  less: {},
  configureWebpack: undefined,
  chainWebpack: undefined,
  //Set to true if you are only targeting evergreen browsers. This will disable ES5 transpilation and polyfills for IE, and result in faster builds and smaller files.
  evergreen: false,
  locales: {
    '/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Vue-powered Static Site Generator'
    },
    '/es/': {
      lang: 'es-ES',
      title: 'VuePress',
      description: 'Vue generador de sitios estaticos'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'path/of/my/repo',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/',
          },
          {
            text: 'Config Reference',
            link: '/config/'
          },
          {
            text: 'Default Theme Config',
            link: '/default-theme-config/'
          }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('Guide')
        }
      },
      '/es/': {
        label: 'Espanol',
        selectText: 'Idiomas',
        editLinkText: 'Editar esta pagina en Github',
        nav: [
          {
            text: 'guia',
            link: '/es/guide/',
          },
          {
            text: 'Guia de configuracion',
            link: '/es/config/'
          },
          {
            text: 'configuracion del tema de defecto ',
            link: '/es/default-theme-config/'
          }
        ],
        sidebar: {
          '/es/guide/': genSidebarConfig('Guia')
        }
      }
    }
  }
}
```

## Actualiza el README.md

```yml
---
home: true
heroImage: not-a-blog-person.jpg
actionText: Get Started →
actionLink: /guide/
features:
- title: Simplicity First
  details: Minimal setup with markdown-centered project structure helps you focus on writing.
- title: Vue-Powered
  details: Enjoy the dev experience of Vue + webpack, use Vue components in markdown, and develop custom themes with Vue.
- title: Performant
  details: VuePress generates pre-rendered static HTML for each page, and runs as an SPA once a page is loaded.
footer: MIT Licensed | Copyright © 2018-present Evan You
---
```

## Configuracion personalizada del tema

```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // podemos configurar el repositorio para habilitar el boton de EDITAR
    repo: 'rsurjano/blog',
    repoLabel: 'Contribuye!',
    docsDir: 'pages',
    docsBranch: 'develop',
    editLinks: true,
    editLinkText: 'Ayudanos a mejorar el contenido!'
    // barra de busqueda
    search: true,
    searchMaxSuggestions: 10,
    // habilitamos el sidebar
    sidebar: [
      {
        title: 'Group 1',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'Group 2',
        children: [ /* ... */ ]
      }
    ],
    // opcionalmente podemos desabilitar el navbar
    navbar: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Acerca de', link: '/acercade/' },
      { text: 'Externo', link: 'https://roysurjano.net },
      // soporte para multi-idioma
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      },
      // Soporte para subgrupos
      {
        text: 'Languages',
        items: [
          { text: 'Group1', items: [
            { text: 'Chinese', link: '/language/chinese' },
            { text: 'Japanese', link: '/language/japanese' },
          ] },
          { text: 'Group2', items: [
            { text: 'Frech', link: '/language/french' },
            { text: 'Spanish', link: '/language/spanish' },
          ] }
        ]
      }
    ]
  }
}
```

## Modificando estilos

Creamos y editamos `.vuepress/override.styl`

```javascript
// .vuepress/override.styl
$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
```

## Generando plantillas personalizadas

> Creamos/Editamos un archivo `.vuepress/components/SpecialLayout.vue`

```javascript
<template>
  <h1>Contenido servido desde SpecialLayout.vue</h1>
</template>

<script>
  export default {
    name: 'SpecialLayout' // id del diseno (requerido)
  }
</script>

<style>
/* your style */
</style>

```

> Creamos/Editamos un archivo `pages/vue-special-layout.md`

```md
---
layout: SpecialLayout
---
```


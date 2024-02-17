---
path: '/hexo-un-poco-del-generador-estatico'
title: 'Hexo, un poco del generador estatico'
date: '2017-07-12T17:12:33.962Z'
---

## Introduccion

[Hexo](https://hexo.io/) es un rapido, simple y potente framework para blogs, super, sencillo y rapido. Entre sus caracteristicas que ofrece tenemos:

- Genera las paginas a traves de [Node.js](https://nodejs.org/es/), por lo tanto realiza esa tarea muy rapido incluso teniendo cientos de archivos

- Soporta [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

- Despliegue en un comando

- Extensibilidad por **Plugins**, como Jade, Coffescript, etc

<!-- more -->

## Puesta a punto

Hexo requiere lo siguiente

- Git

- curl o wget

- xcode (para usuarios Mac)

- node.js

Su instalacion es muy sencilla, solo basta en ejecutar lo siguiente

```bash
npm install hexo-cli -g

hexo init blog
cd blog
npm install
hexo server
```

ingresa a tu [Servidor local](http://localhost:4000/)

### Instalacion del tema Melody

Me agrada el Look & Feel del tema Melody, demo [aqui](https://molunerfinn.com/) y para instalarlo, solo necesitas hacer lo siguiente

```bash
git clone -b master https://github.com/Molunerfinn/hexo-theme-melody themes/melody
npm install hexo-renderer-jade hexo-renderer-stylus --save or yarn add hexo-renderer-jade hexo-renderer-stylus
```

y actualizar el parametro `theme` del archivo `_config.yml` asi: `theme: melody`

enterate mas sobre la configuracion de los Temas de Hexo  [aqui](https://hexo.io/docs/themes.html)

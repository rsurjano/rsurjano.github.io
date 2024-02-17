---
path: '/vuepress-pasos-rapidos-para-empezar'
title: 'Vuepress, pasos rapidos para empezar'
date: '2017-07-12T17:12:33.962Z'
---

## Requisitos previos

> [nvm](https://github.com/creationix/nvm)

> [yarn](https://yarnpkg.com/lang/en/docs/install)

## Configuracion de nvm

1. Instalamos [yarn](https://yarnpkg.com/lang/en/docs/install) como gestionador de paquetes [npm](https://www.npmjs.com/)

2. Instalamos [nvm](https://github.com/creationix/nvm) gestiona las versiones de node/npm por nosotros, sugiero su instalacion y configuracion como sigue:

<!-- more -->

```bash
## NVM/LINUX ------------------

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

## NVM/OSX------------------

brew install nvm

## YARN/OSX ------------------

brew install yarn --without-node

## YARN/LINUX ------------------

# para centos/fedora
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo

# o usando un script
curl -o- -L https://yarnpkg.com/install.sh | bash

# vuepress requiere node >9.x
nvm install v9.11.1

# por defecto nvm usara esta version *TIP
nvm alias default v9.11.1

nvm use v9.11.1
```

## la instalacion de Vuepress

conoce mas de [Vuepress](https://laravel-news.com/vuepress)

```bash
# setup basico
mkdir vuepress
cd vuepress

# instalamos como una dependencia local
yarn add -D vuepress

# creamos una carpeta de documentos
mkdir docs

# finalmente creamos un documento markdown
echo '# Hola!  VuePress' > docs/README.md
```

## En marcha

### podemos usar el package.json 

```json
{
  "scripts": {
    "vuepress": "./node_modules/.bin/vuepress dev docs"
  },
  "devDependencies": {
    "vuepress": "^0.8.4"
  }
}
```

```bash
npm run vuepress
```

### o directamente desde la terminal

```bash
./node_modules/.bin/vuepress dev docs
```

listo!, veras tu archivo `docs/README.md` actualizado cada vez que lo actualices

Link a tu entorno local => [http://localhost:8080/](http://localhost:8080/)

```bash
VuePress dev server listening at http://localhost:8080/

  [18:17:16] ✔ successfully compiled.
  [18:18:47] ✔ successfully compiled.
  [18:18:48] ✔ successfully compiled.
  [18:18:53] ✔ successfully compiled.
  [18:18:56] ✔ successfully compiled.
```

## Generacion/Compilacion

```json
{
  "scripts": {
    "vuepress": "./node_modules/.bin/vuepress dev docs",
    "vuepress-build": "./node_modules/.bin/vuepress build docs"
  },
  "devDependencies": {
    "vuepress": "^0.8.4"
  }
}
```

```bash
npm run vuepress-build
```

o usando el `terminal`

```bash
./node_modules/.bin/vuepress build docs
```

sigue el siguiente post [Vuepress, mas detalles](/blog/vuepress-mas-detalles.md)

quieres seguir investigando? dale una visita [aqui](https://vuepress.vuejs.org/guide/)

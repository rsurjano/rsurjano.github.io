---
path: '/angular-y-angular-cli-un-vistazo-general'
title: 'Angular y Angular CLI un vistazo general'
date: '2017-07-12T17:12:33.962Z'
---

En este post te explicare rapidamente sobre el Framework Front-End `Angular v4` de una forma muy general para que sea un punto inicial en su aprendizaje.

Como aclaracion no tocaremos nociones basicas, solo un vistazo de `Angular` y `AngularCLI`

## Requerimientos

Solo necesitas nociones de:

- HTML
- CSS (no es tan importante)
- JavaScript basico
- Fundamentos de programacion (funciones, condicionales, iteradores, etc)
- Shell

## Caracteristicas principales y terminos comunes

Tenemos la siguiente lista que debemos entender a la perfeccion cada uno de estos siguientes terminos:

- Components
- Services
- Routing
- Testing
- Build Tools
- Data Binding
- Templating
- HTTP Module
- Observables
- Form Module
- Directives
- Pipes
- Events
- Animation
- TypeScript

## Componentes

es el bloque basico de la `Interfaz de Usuario`, una aplicacion normal en `Angular` es un arbol de componentes.

Sobre los `Decoradores` estos nos permiten marcar una clase como un componente y provee `metadatos` que determinan como el componente deberia ser procesado, instanciado y usado en tiempo de ejecucion, ejemplo:

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})

export class AppComponent {
  name = 'Angular';
}
```

```html
<body>
    <my-app>Cargando el AppComponente aqui... </my-app>
</body>
```

## Servicios

Los servicios no son mas que clases que envian `datos y funcionalidad` a traves de los componentes, estos tienen las siguientes caracteristicas:

- mantiene el codigo limpio
- aplica el concepto de `DRY`, Don't repeat yourself, es decir: `No te repitas a ti mismo`
- Los servicios son un lugar ideal para llamadas `Ajax`

a continuacion un ejemplo simple:

```javascript
import { Injectable } from '@angular/core';

import { User } from './user';
import { USERS } from './mock-users';

@Injectable()
export class UserService {
  getUsers(): User[] {
    return USERS;
  }
}
```

## Instalacion

 Necesitas tener instalado `NodeJS` previamente con `npm` y actualmente hay dos formas principales de instalar Angular v4 de entre la infinidad de formas actuales:

- [Angular CLI](https://cli.angular.io/)
- [Quickstart Seed](https://github.com/angular/quickstart)

empezaremos con la instalacion de Angular v4 usando `Angular CLI` de esta manera

```bash
# generamos una nueva aplicacion
ng new mi-nueva-aplicacion-angular

# lanzamos la aplicacion
cd mi-nueva-aplicacion-angular
ng serve
```

![ejecutando ng serve](/content/images/2018/05/Screen-Shot-2018-05-05-at-8.02.38-AM.png)

usa [http://localhost:4200/](http://localhost:4200/) para acceder a la aplicacion

### package.json

`ng new mi-nueva-aplicacion-angular` te genera un package.json con lo siguiente:

```javascript
{
  "name": "mi-nueva-aplicacion-angular",
  "version": "0.0.0",
  "license": "MIT",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build --prod",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
  "private": true,
  "dependencies": {
    "@angular/animations": "^5.2.0",
    "@angular/common": "^5.2.0",
    "@angular/compiler": "^5.2.0",
    "@angular/core": "^5.2.0",
    "@angular/forms": "^5.2.0",
    "@angular/http": "^5.2.0",
    "@angular/platform-browser": "^5.2.0",
    "@angular/platform-browser-dynamic": "^5.2.0",
    "@angular/router": "^5.2.0",
    "core-js": "^2.4.1",
    "rxjs": "^5.5.6",
    "zone.js": "^0.8.19"
  },
  "devDependencies": {
    "@angular/cli": "~1.7.4",
    "@angular/compiler-cli": "^5.2.0",
    "@angular/language-service": "^5.2.0",
    "@types/jasmine": "~2.8.3",
    "@types/jasminewd2": "~2.0.2",
    "@types/node": "~6.0.60",
    "codelyzer": "^4.0.1",
    "jasmine-core": "~2.8.0",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~2.0.0",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "^1.2.1",
    "karma-jasmine": "~1.1.0",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.1.2",
    "ts-node": "~4.1.0",
    "tslint": "~5.9.1",
    "typescript": "~2.5.3"
  }
}
```

`Angular-CLI` ya te instala por defecto las dependencias de angular a la ultima version estable, empecemos su analisis con `scripts` que se pueden lanzar usando *npm run nombre-del-script*

### Scripts

```javascript
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build --prod",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  },
```

- ng: lanza el CLI

- start

inicia la aplicacion

- build

genera el empaquetado de la aplicacion lista para produccion aplicando varias optimizaciones como la minificacion, concatenacion, eliminado de codigo innecesario de archivos, entre muchos otros.

![ng-build](/content/images/2018/05/ng-build.png)

- test

corre las pruebas unitarias que existan en la carpeta `e2e` y que por defecto se usa la nomeclatura para los archivos con *nombre-de-archivo.e2e-spec.ts*

- lint

Realiza una revision del codigo en busca de errores de sintaxis

![ng-lint](/content/images/2018/05/ng-lint.png)

- e2e

Lanza las pruebas unitarias `E2E`, mas informacion sobre este tema [aqui](https://github.com/angular/angular-cli/wiki/e2e)

### Dependencias

```javascript
  "dependencies": {
    "@angular/animations": "^5.2.0",
    "@angular/common": "^5.2.0",
    "@angular/compiler": "^5.2.0",
    "@angular/core": "^5.2.0",
    "@angular/forms": "^5.2.0",
    "@angular/http": "^5.2.0",
    "@angular/platform-browser": "^5.2.0",
    "@angular/platform-browser-dynamic": "^5.2.0",
    "@angular/router": "^5.2.0",
    "core-js": "^2.4.1",
    "rxjs": "^5.5.6",
    "zone.js": "^0.8.19"
  },
```

observa que las dependencias necesarias de Angular son: [animations](https://v4.angular.io/api?query=animations, [common](https://v4.angular.io/api?query=common), [compiler](https://v4.angular.io/api?query=compiler, [core](https://v4.angular.io/api?query=core), [forms](https://v4.angular.io/api?query=forms), [http](https://v4.angular.io/api?query=http), [platform-browser](platform), [platform-browser-dynamic](platform) y [router](https://v4.angular.io/api?query=router). Las demas como [core-js](https://github.com/zloirock/core-js), [rxjs](https://github.com/ReactiveX/rxjs) (para programacion reactiva) y [zone.js](https://github.com/angular/zone.js/) (implementa zonas en JS) sirven como adicion a Angular y tambien se usan en tiempo de desarrollo.

### Dependencias de desarrollo

```javascript
  "devDependencies": {
    "@angular/cli": "~1.7.4",
    "@angular/compiler-cli": "^5.2.0",
    "@angular/language-service": "^5.2.0",
    "@types/jasmine": "~2.8.3",
    "@types/jasminewd2": "~2.0.2",
    "@types/node": "~6.0.60",
    "codelyzer": "^4.0.1",
    "jasmine-core": "~2.8.0",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~2.0.0",
    "karma-chrome-launcher": "~2.2.0",
    "karma-coverage-istanbul-reporter": "^1.2.1",
    "karma-jasmine": "~1.1.0",
    "karma-jasmine-html-reporter": "^0.2.2",
    "protractor": "~5.1.2",
    "ts-node": "~4.1.0",
    "tslint": "~5.9.1",
    "typescript": "~2.5.3"
  }
```

estas dependencias se usan como complemento para compilar la aplicacion, realizar todo tipo de pruebas, brindar soporte para [typescript](https://www.typescriptlang.org/) y compilar la aplicacion para produccion entre otras tareas posibles.

## Estructura

#### angular-cli.json

AngularCLI genera un archivo `.angular-cli.json` por defecto que tiene esta estructura 

```javascript
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "project": {
    "name": "mi-nueva-aplicacion-angular"
  },
  "apps": [
    {
      "root": "src",
      "outDir": "dist",
      "assets": [
        "assets",
        "favicon.ico"
      ],
      "index": "index.html",
      "main": "main.ts",
      "polyfills": "polyfills.ts",
      "test": "test.ts",
      "tsconfig": "tsconfig.app.json",
      "testTsconfig": "tsconfig.spec.json",
      "prefix": "app",
      "styles": [
        "styles.css"
      ],
      "scripts": [],
      "environmentSource": "environments/environment.ts",
      "environments": {
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
    }
  ],
  "e2e": {
    "protractor": {
      "config": "./protractor.conf.js"
    }
  },
  "lint": [
    {
      "project": "src/tsconfig.app.json",
      "exclude": "**/node_modules/**"
    },
    {
      "project": "src/tsconfig.spec.json",
      "exclude": "**/node_modules/**"
    },
    {
      "project": "e2e/tsconfig.e2e.json",
      "exclude": "**/node_modules/**"
    }
  ],
  "test": {
    "karma": {
      "config": "./karma.conf.js"
    }
  },
  "defaults": {
    "styleExt": "css",
    "component": {}
  }
}
```

Puedes navegaor por el [esquema de configuracion](https://github.com/angular/angular-cli/wiki/angular-cli) para mas detalles o leer el equema traducido

```yml
# Opciones
project:
  name: 'mi-proyecto-angular' # (string): el nombre del proyecto
  ejected(boolean): false # Si o no este projecto sera sacado.

apps: # (array): Las propiedades de las diferentes aplicaciones en este proyecto.
  name:  'mi-nueva-aplicacion-angular' #(string): Nombre de la app.
  root:  'src' # (string): el directorio raiz de la app.
  outDir: '/ist' # (string): El directorio de salida para construir el resultado
  assets: ['assets','favicon.ico'] # (array): Lista de los recursos de la aplicacion
  deployUrl: '' # (string): la URL donde los archivos seran desplegados.
  index: 'index.html' # (string): El nombre del archivo HTML inicial.
  main: 'main.ts' # (string): el nombre de la entrada inicial
  polyfills: 'polyfills.ts' # (string): El nombre de los puntos de entrada. Cargados antes de la app.
  test: 'test.ts' # (string): El nombre del punto de entrada de los tests.
  tsconfig: 'tsconfig.app.json' # (string): El nombre del arhivo .ts de configuracion.
  testTsconfig: 'tsconfig.spec.json' # (string): El nombre del archivo .ts de configuracion par alas pruebas unitarias.
  prefix: 'app' # (string): el prefijo para aplicar los selectores generados.
  serviceWorker: false # (boolean): Soporte experimental para un service worker desde @angular/service-worker.
  showCircularDependencies: true # (boolean): Muestra las advertencias de dependencia circular al construir.
  styles (string# |array): ['styles.css'] # estilos globales para ser incluidos en la construccion.
  stylePreprocessorOptions: # Las opciones para pasar al preprocesador de estilos.
  includePaths: [] # (array): Ruta para incluir, sera resuelto usando la ruta principal
  scripts: # (array): Scripts globales para ser incluidos en la construccion.
  environmentSource: 'environments/environment.ts' # (string): Archivo fuente para la configuracion del entorno.
  environments: # (object): Nombre y correspondiente archivo para el entorno de configuracion
    dev: "environments/environment.ts"
    prod: "environments/environment.prod.ts"

e2e: # Configuracion para las pruebas e2e
  protractor:
    config: './protractor.conf.js' # (string) Ruta del archivo de configuracion.
    lint: [] #  (array) propiedades para ser pasados a tslint.
    {
      project: "src/tsconfig.app.json",
      exclude: "**/node_modules/**"
    },
    {
      project: "src/tsconfig.spec.json",
      exclude: "**/node_modules/**"
    },
    {
      project: "e2e/tsconfig.e2e.json",
      exclude: "**/node_modules/**"
    }
```

### app.component

El componente inicial que genera `Angular CLI` esta dentro de `src/app/components` y comprende varios archivos `app.component` y un punto inicial `app.module.ts`

este modulo comprende los archivos `.ts`, `.html` y `.css` que usa el componente

```javascript
// app.component.ts
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
```

```html
<!-- app.component.html -->
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
</div>
```

```less
// app.component.css
h1 {
  color: red;
}
```

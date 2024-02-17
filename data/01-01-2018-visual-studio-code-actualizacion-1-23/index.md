---
path: '/visual-studio-code-actualizacion-1-23'
title: 'Visual Studio Code actualizacion 1.23'
date: '2017-07-12T17:12:33.962Z'
---

## Introduccion

Ha llegado la actualizacion de Abril 2018 de Visual Studio Code, `v1.23` y aqui te traigo un analisis de sus nuevas caracteristicas y mejoras implementadas.

## Editor

### Indentacion de codigo

Ahora el editor te muestra las lineas verticales de la indentacion, ademas ahora se pueden cambiar de [color](https://www.webpagefx.com/web-design/color-picker/), algo parecido a lo que hacia la extension [Bracket Pair Colorized](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer).

y puedes usar si deseas [Color Picker](https://www.webpagefx.com/web-design/color-picker/) para generar el color hexadecimal de tu preferencia. solo basta con agregar o actualizar tu archivo de configuracion `settings.json` con el siguiente cambio

```json
"workbench.colorCustomizations": {
    "editorIndentGuide.activeBackground": "#ff00ff"
}
```

<!-- more -->

![Highlighted indent guides](https://code.visualstudio.com/assets/updates/1_23/active-indent-guide.gif)

### Ordenar acciones al guardar

ahora podemos usar configurar las acciones por defecto al guardar **disgregandolas** por `lenguaje`, mas detalles dale una mirada a las [Configuracion de las especificaciones del lenguaje](https://code.visualstudio.com/docs/getstarted/settings#_language-specific-editor-settings).

```json
"[typescript]": {
    "editor.codeActionsOnSave": {
        "files.autoSave": "off",
        "editor.formatOnSave": false,
    }
},
"[javascript]": {
    "editor.codeActionsOnSave": {
        "files.autoSave": "on",
        "editor.formatOnSave": true,
    }
}
```

### Explorador de scripts NPM

![npm scripts on vscode](https://code.visualstudio.com/assets/updates/1_23/script-explorer.png)

Ahora puedes ver visualmente los scripts npm declarados en tu `package.json`, solo agrega la linea a continuacion a tu archivo de configuracion `settings.json`

```json
    "npm.enableScriptExplorer": true
```

### agregado filtros glob en la vista Problemas

nos pasa que al usar la vista `problemas` nos llena de mucha informacion, ahora [vscode](https://code.visualstudio.com/) nos permite filtrar usando [Patrones glob](https://en.wikipedia.org/wiki/Glob_(programming)), y facilmente probarlos usando [globtester](http://www.globtester.com/).

![Glob pattern vscode](https://code.visualstudio.com/assets/updates/1_23/problems_filter.gif)

Los usos comunes se dan cuando se validan archivos `*.md` o `*.js` y solo quieres ver los problemas de los `*.js`, entonces en ese caso usarias el patron: `!*.js` para filtrarlos

### Usar el boton del medio para selecciones de columna

![Seleccion usando el boton medio](https://code.visualstudio.com/assets/updates/1_23/editor-column-select.gif)

Anteriormente se usaba `Shift` y `Alt` para seleccionar en columna, ahora tambien se puede usar el boton del medio para realizar la misma accion.

### Colapsar codigo CSS

esta es una nueva `caracteristica` que nos permite usar `/* #region */` al inicio del codigo `css/scss/less` que queremos colapsar y `/* #endregion */` al final del mismo, con esto se logra el efecto de `ocultar` y `mostrar` codigo

![mostrar u ocultar codigo en vscode](https://code.visualstudio.com/assets/updates/1_23/css-folding.gif)

### Mejorado el soporte a las nuevas propiedades del CSS

Se han realizado varias mejoras en el reconocimiento de errores en el CSS y el equipo detras de `vscode` se ve que han trabajado en estos.

- anteriormente `vscode` no reconocia propiedades como `backdrop-filter` ahora ya lo hace

![propiedades no reconocidas en css](https://code.visualstudio.com/assets/updates/1_23/css-unkown-property.png)

- `vscode` ahora esta usando [Mozilla Developer Network](https://github.com/mdn/data) para soportar los nuevos estandares y como fuente de informacion actualizada (que son como 87 nuevas) y adicionalmente esta ofreciendo autocompletacion de estos.

![autocompletado css en vscode](https://code.visualstudio.com/assets/updates/1_23/css-mdn.gif)

En el mercado hay excelentes extensiones que validan el css/less/sass entre otros.

La extension que personalmente uso es [Stylelint](https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint) y uso la siguiente configuracion para desactivar el  `css lint` por defecto de VSCode para evitar una doble deteccion de errores de los dos lints.

```json
  "css.validate": false
```

### Busqueda de los encabezados de Markdown

Es una nueva caracteristica que nos permite buscar entre todos los archivos `markdown` del espacio de trabajo actual, solo basta con abrir el buscador de archivos y empezar con el simbolo de `#` y escribir el nombre del archivo a buscar

![Busqueda de archivos markdown en vscode](https://code.visualstudio.com/assets/updates/1_23/markdown-workspace-symbol-search.png)

Por ahora eso es todo, espero que la informacion brindada sea de utilidad y para mas informacion puedes visitar el sitio oficial de la actualizacion [v1.23 de VSCode](https://code.visualstudio.com/updates/v1_23) o darle una mirada a [video](https://www.youtube.com/watch?v=9WXqgggvmOs&feature=youtu.be) para mas detalles explicativos.

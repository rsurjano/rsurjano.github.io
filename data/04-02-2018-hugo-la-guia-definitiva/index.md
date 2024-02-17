---
path: '/hugo-la-guia-definitiva'
title: 'Hugo, la guia definitiva'
date: '2017-07-12T17:12:33.962Z'
---

## Empezando

### inicio rapido

#### Paso 1: Instalar Hugo

Se requiere de [Homebrew](https://brew.sh/) para instalar Hugo, dale un paso a su pagina de [instalacion](https://gohugo.io/getting-started/installing) para mas detalles.

```bash
# comando de instalacion
brew install hugo

# verificar tu instalacion
hugo version
```

<!-- more -->

#### Paso 2: Crear un nuevo sitio

```bash
# crea un nuevo sitio con nombre quickstart
hugo new site quickstart
```

#### Paso 3: Agregar un tema

Dale un paso a [temas](https://themes.gohugo.io/) donde encontraras una enorme lista de temas, o como lo sugiere [gohugo.io](https://gohugo.io/getting-started/quick-start/) puedes probar [Ananke theme](https://themes.gohugo.io/gohugo-theme-ananke/)

```bash
# crea una carpeta quickstart
cd quickstart;\
# inicia git
git init;\
# Agrega un submodulo
git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke;\

# Edit your config.toml configuration file
# and add the Ananke theme.
echo 'theme = "ananke"' >> config.toml
```

#### Paso 4: Agrega un poco de contenido

```bash
hugo new posts/mi-primer-post.md
```

Inicia el modo `desarrollo` y servidor escribiendo

```bash
# el parametro -D le indica que inicie en modo desarrollo

# hugo server -D
# Started building sites ...
# Built site for language en:
# 1 of 1 draft rendered
# 0 future content
# 0 expired content
# 1 regular pages created
# 8 other pages created
# 0 non-page files copied
# 1 paginator pages created
# 0 categories created
# 0 tags created
# total in 18 ms
# Watching for changes in /Users/bep/sites/quickstart/{data,content,layouts,static,themes}
# Serving pages from memory
# Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
# Press Ctrl+C to stop
```

puedes ingresar usando el [servidor local](http://localhost:1313/.) generado

#### Paso 5: Personalizar el tema

Genera y abre el archivo `config.toml` en tu editor

```bash
# reemplazalo si ya tienes un dominio
baseURL = "https://example.org/"
languageCode = "es-es"
# reemplaza el titulo con algo mas personal
title = "My New Hugo Site"
# usamos el tema recomendado
theme = "ananke"
```

para que revises la configuracion especifica del sitio, dale una [visita](https://github.com/budparr/gohugo-theme-ananke) al tema de `ananke`

### Instalar Hugo

`Hugo` se puede instalar en los siguientes sistemas operativos: `macOS`, `Windows`, `Linux` e incluso `FreeBSD`, y en cualquier maquina donde pueda correr el compilador de [Go](https://golang.org/). Sobre las ultimos lanzamientos de Hugo, puedes visitar el siguiente [Link](https://github.com/gohugoio/hugo/releases)

#### Tipos comunes de instalaciones

Requisitos previos

- Sistema operativo de 64-bits

- se usara la carpeta `~/Sites` como punto inicial de `Hugo`

- [Git](http://git-scm.com/)

- [Go](https://golang.org/dl/)

- [Homebrew](https://brew.sh/)

- [Chocolatey](https://chocolatey.org/)

```bash
#
# macOSX
#

# Preinstalacion de Homebrew (opcional)
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# ==> Downloading https://homebrew.bintray.com/bottles/hugo-0.21.sierra.bottle.tar.gz
# ######################################################################### 100.0%
# ==> Pouring hugo-0.21.sierra.bottle.tar.gz
# 🍺  /usr/local/Cellar/hugo/0.21: 32 files, 17.4MB

# Instalacion de Hugo
brew install hugo
brew install hugo --HEAD # para obtener la ultima version disponible

#
# Windows
#

# Chocolatey (Windows)
choco install hugo -confirm

hugo version # verifica su correcta instalacion
# Hugo Static Site Generator v0.13 BuildDate: 2015-03-09T21:34:47-05:00

#Para una instalacion sin Chocolatey, dale una visita a: https://gohugo.io/getting-started/installing/#windows


# Instalaciones desde el Tarball puedes seguir el link: https://gohugo.io/getting-started/installing/#step-2-download-the-tarball

#
# Linux
#

# Usando Span Package
snap install hugo

# Debian y ubuntu
sudo apt-get install hugo

# Arch linux
sudo pacman -Sy hugo

# Fedora
sudo dnf install hugo

# Centos y Red Hat
# sigan el link https://copr.fedorainfracloud.org/coprs/daftaupe/hugo/
```

#### Actualizando Hugo

Solo descarga y reemplaza el ejecutable en tu `PATH` o corre en macOSX

```bash
brew upgrade hugo
```

#### Consideraciones

- Al instalar usando `Homebrew` estas condicionado a la ultima version mantenida y registrada en esta por la comunidad

- Al instalar usando `Tarball` pero requiere buen manejo de la terminal y solo se requiere volver a correr el script para recibir actualizaciones

- Al compilar desde el `Codigo Fuente` es un proceso duro, el punto a favor es que obtendras las ultimas versiones sin espera, pero requiere una compilacion previa y su duracion depende de la velocidad de tu procesador.

### Uso Basico

Hugo maneja un CLI interno para su administracion, dale una vista a la [Referencia de la Linea de Comandos](https://gohugo.io/commands/) para las detalles.

#### Verificacion previa

```bash
hugo help
```

`Traducido`

```bash
hugo es el comando principal, usado para construir tu sitio Hugo.

Hugo es un rapido y flexible generador de sitio estatico
construido con amor por spf13 y amigos en Go.

documentacion completa esta disponible en http://gohugo.io/.

Uso:
  hugo [parametros]
  hugo [commandos]

Comandos disponibles:
  benchmark   Lanza Hugo Benchmark para construir un sitio en un numero de veces.
  check       Contiene algunas verificaciones
  config      imprime la configuracion del sitio
  convert     Convierte tu contenido a diferentes formatos
  env         Imprimo la version de Hugo y la informacion del entorno
  gen         Una coleccion de varios generadores utiles
  help        Ayuda acerca de cualquier comando
  import      Importa tu sitio desde otros.
  list        Imprime una lista de varios tipos de contenido
  new         Crea nuevo contenido para tu sitio
  server      Un servidor web de alto rendimiento
  version     Imprime el numero de version de Hugo

Argumentos:
  -b, --baseURL string             ruta y hostname a la raiz e.g. http://spf13.com/
  -D, --buildDrafts                incluye contenido marcado como borrador
  -E, --buildExpired               incluye contenido expirado
  -F, --buildFuture                incluye contenido con fecha de publicacion en el futuro
      --cacheDir string            ruta del archivo de sistema al directorio cache. Defecto: $TMPDIR/hugo_cache/
      --canonifyURLs               (discontinuado) sitrue, todas las rutas relativas seran canonicalizadas usando baseURL
      --cleanDestinationDir        remueve archivos desde el destino no encontrado en el directorio estatico
      --config string              archivo de configuracion (por defecto es path/config.yaml|json|toml)
  -c, --contentDir string          Ruta del archivo de sistema al directorio del contenido
      --debug                      salida de depuracion
  -d, --destination string         ruta  a escribir
      --disableKinds stringSlice   Desabilita diferentes tipos de paginas (hogar, RSS etc.)
      --enableGitInfo              Agrega una revision Git, fecha e informacion de autor a las paginas
      --forceSyncStatic            copia todos los archivos cuando `static` es cambiado
      --gc                         activa correr algunas tareas de limpieza (remueve archivos de cache no usados) despues del build
  -h, --help                       ayuda para hugo
      --i18n-warnings              imprime traducciones faltantes
      --ignoreCache                ignora el directorio de cache
  -l, --layoutDir string           la ruta del sistema para el directorio de los lienzos
      --log                        activa el logeo
      --logFile string             ruta del archivo de log (si esta seteado, el logeo es activado automaticamente)
      --noChmod                    no sincroniza el modo de permiso de los archivos
      --noTimes                    no sincroniza la hora de modificacion de los archivos
      --pluralizeListTitles        (discontinuado) pluraliza los titulos en listas usando inflect (por defecto true)
      --preserveTaxonomyNames      (discontinuado) reserva los nombre de taxonomia como escritos ("Gérard Depardieu" vs "gerard-depardieu")
      --quiet                      contruye en modo silencioso
      --renderToMemory             renderiza a memoria (solo util para pruebas de rendimiento)
  -s, --source string              ruta para leer los archivos relativos
      --stepAnalysis               muestra la memoria y el tiempo de diferentes pasos del programa
      --templateMetrics            muestra metricas acerca de la ejecucion de las plantillas
      --templateMetricsHints       calcula algunas pistas de mejoras cuando es combinado con --templateMetrics
  -t, --theme string               tema a usar (localizado en /themes/THEMENAME/)
      --themesDir string           ruta del directorio de los temas
      --uglyURLs                   (discontinuado) si true, usa /filename.html en vez de /filename/
  -v, --verbose                    salida detallada
      --verboseLog                 logeo detallado
  -w, --watch                      observa los archivos por cambios y los relanza

Usa "hugo [command] --help" para mas informacion acerca de un comando.
```

#### El comando `Hugo`

este comando genera una carpeta `public/` por defecto, lo puedes personalizar usando la [configuracion de hugo](https://gohugo.io/getting-started/configuration/) o actualizando el campo `publishDir`

```bash
# informacion normal al usar el comando hugo
hugo
0 draft content
0 future content
99 pages created
0 paginator pages created
16 tags created
0 groups created
in 90 ms
```

#### Como hugo maneja el contenido

tenemos tres tipos basico: `publishdate`, `draft: true` y `expirydate` y no publica el contenido siguiendo estas reglas:

- contenido con una fecha futura en `publishdate`

- contenido con `draft: true`

- contenido con una fecha pasada en `expirydate`

A pesar de eso, esos valores se pueden modificar usando estos tres modificadores:

- `--buildFuture`

- `--buildDrafts`

- `--buildExpired`

#### LiveReload

Hugo viene con un LiveReload incorporado, modo de uso es como sigue:

```bash
hugo server
# 0 draft content
# 0 future content
# 99 pages created
# 0 paginator pages created
# 16 tags created
# 0 groups created
# in 120 ms
# Watching for changes in /Users/yourname/sites/yourhugosite/{data,content,layouts,static}
# Serving pages from /Users/yourname/sites/yourhugosite/public
# Web Server is available at http://localhost:1313/
# Press Ctrl+C to stop
```

el watcher(observador) vigila cualquier cambio para relanzar la construccion de las paginas, el watcher observa determinadas carpetas, para mas detalles visita [Organizacion del proyecto](https://gohugo.io/getting-started/directory-structure/):

- `/static/*`

- `/content/*`

- `/data/*`

- `/i18n/*`

- `/layouts/*`

- `/themes/<CURRENT-THEME>/*`

- `config`

al detectar un cambio, `Hugo` reconstruye el sitio, tan pronto como termina se recarga silenciosamente la pagina del navegador. Normalmente estas reconstrucciones son muy rapidas

#### Deshabilitando el LiveReload

LiveReload inyecta JavaScript en las paginas, ese `Script` crea una conexion de `WebSocket` entre el cliente y el servidor web de `Hugo`. Para deshabilitar el `LiveReload` en entornos por ejemplo como produccion, realiza lo siguiente

```bash
# deshabilitar el watcher
hugo server --watch=false

# deshabilitar el LiveReload
hugo server --disableLiveReload
```

o tambien puedes deshabilitario agregando el siguiente campo en tu archivo `config.toml` o `config.yml`

```toml
disableLiveReload = true
```

```yaml
disableLiveReload = true
```

#### Despliegue

despues de finalizar la etapa de desarrollo es normal que generes tu sitio optimizado para produccion, `Hugo` genera por ti todos los archivos estaticos necesarios.

> Corriendo `hugo` no remueve los archivos generados, debes borrar manualmente la carpeta `public/` antes de correr el comando `hugo`

#### Destinos de despliegue y Desarrollo

Hugo no remueve los archivos generados antes de la construccion, para iniciar contenido como `Draft` en diferentes carpetas puedes hacer los siguiente:

```bash
hugo server -wDs ~/Code/hugo/docs -d dev
```

y cuando el contenido esta listo para publicar usa la carpeta por defecto `public/`

```bash
hugo -s ~/Code/hugo/docs
```

### Estructura de los directorios

si corres `hugo new site` desde la linea de comandos se creara la estructura de directorios con los siguientes elementos:

```md
.
├── archetypes
├── config.toml
├── content
├── data
├── layouts
├── static
└── themes
```

#### Explicacion de la estructura de los directorios

los siguientes son una revision de alto nivel de las carpetas de cada seccion

- `archetypes`

aqui especificas el contenido nuevo que se creara usando `hugo new` con al menos los campos: `date`, `title`, `draft = true`. Esto salva tiempo y promueve consistencia para ls sitios, puedes ahondar mas, creando tus propios [archetypes](https://gohugo.io/content-management/archetypes/)

- `config.toml`

`Hugo` acepta TOML, YAML o JSON en la carpeta principal

- `content`

El contenido del sitio va en esta carpeta, normalmente son archivos markdown

- `data`

Aqui se guardan las configuraciones de los archivos a usar, pueden ser YAML, JSON, TOML como formato, tambien se pueden crear [data templates](https://gohugo.io/templates/data-templates/) para contenido dinamico.

- `layout`

guarda plantillas en la forma `.html`, las plantillas comprenden:

- `paginas de lista`, `pagina principal`, `plantillas taxonomicas` `parciales`, `paginas de una sola` y muchos mas

- `static`

aqui se guarda todo el contenido estatico del sitio web, imagenes, scripts, etc.

> desde `Hugo 0.31` puedes tener multiples directorios para contenido estatico

### Configurando `Hugo`

Hugo normalmente usa achivo `config.toml` o `config.yaml` o `config.json` si estan en la carpeta raiz. Puedes sobreescribir este archivo usando el parametro `--config` de la siguiente manera

```bash
hugo --config debugconfig.toml
# o cuando tienes varios archivos de configuracion
hugo --config a.toml,b.toml,c.toml
```

todos los parametros de configuracion los puedes encontrar [aqui](https://gohugo.io/getting-started/configuration/#all-configuration-settings) o revisando el config.yaml de ejemplo

```yaml
archetypeDir: false #  ("archetypes")The directory where Hugo finds archetype files (content templates).
baseURL: '/' # Hostname (and path) to the root, e.g. http://bep.is/
blackfriday: '' # See [Configure Blackfriday](/getting-started/configuration/#configure-blackfriday)
buildDrafts: false #  (false)Include drafts when building.
buildExpired: false #   (false)Include content already expired.
buildFuture: false #  (false)Include content with publishdate in the future.
canonifyURLs: false #  (false)Enable to turn relative URLs into absolute.
contentDir: 'content' #  ("content")The directory from where Hugo reads content files.
dataDir: 'content' #  ("data")The directory from where Hugo reads data files.
defaultContentLanguage: 'en' #  ("en")Content without language indicator will default to this language.
defaultContentLanguageInSubdir: false #  (false)Render the default content language in subdir, e.g. `content/en/`. The site root `/` will then redirect to `/en`.
disableHugoGeneratorInject: false  #Hugo will, by default, inject a generator meta tag in the HTML head on the _home page only_. You can turn it off, but we would really appreciate if you don't, as this is a good way to watch Hugo's popularity on the rise.
disableKinds: [''] # Enable disabling of all pages of the specified *Kinds*. Allowed values in this list: `"page"`, `"home"`, `"section"`, `"taxonomy"`, `"taxonomyTerm"`, `"RSS"`, `"sitemap"`, `"robotsTXT"`, `"404"`.
disableLiveReload: false # Disable automatic live reloading of browser window.
disablePathToLower: false # Do not convert the url/path to lowercase.
enableEmoji: false # Enable Emoji emoticons support for page content; see the [Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet/).
enableGitInfo: false # Enable `.GitInfo` object for each page (if the Hugo site is versioned by Git). This will then update the `Lastmod` parameter for each page using the lastgit commit date for that content file.
enableMissingTranslationPlaceholders: false # Show a placeholder instead of the default value or an empty string if a translation is missing.
enableRobotsTXT: false # Enable generation of `robots.txt` file.
frontmatter: '' # See [Front matter Configuration](#configure-front-matter).
footnoteAnchorPrefix: ''  # Prefix for footnote anchors.
footnoteReturnLinkContents: '' # Text to display for footnote return links.
googleAnalytics: '' # Google Analytics tracking ID.
hasCJKLanguage: false # If true, auto-detect Chinese/Japanese/Korean Languages in the content. This will make `.Summary` and `.WordCount` behave correctly for CJK languages
imaging: '' # See [Image Processing Config](/content-management/image-processing/#image-processing-config).
languages: '' # See [Configure Languages](/content-management/multilingual/#configure-languages).
languageCode: '' # The site's language code.
disableLanguages: '' # See [Disable a Language](/content-management/multilingual/#disable-a-language)
layoutDir: "layouts" # The directory from where Hugo reads layouts (templates).
log: false # Enable logging.
logFile: '' # Log File path (if set, logging enabled automatically).
menu: '' # See [Add Non-content Entries to a Menu](/content-management/menus/#add-non-content-entries-to-a-menu).
metaDataFormat: 'toml' # Front matter meta-data format. Valid values: `"toml"`, `"yaml"`, or `"json"`.
newContentEditor: '' #The editor to use when creating new content.
noChmod: false # # Don't sync permission mode of files.
noTimes: false #Don't sync modification time of files.
paginate: (10)Default number of pages per page in [pagination](/templates/pagination/).
paginatePath: ("page")The path element used during pagination (https://example.com/page/2).
permalinksSee: [Content Management](/content-management/urls/#permalinks).
pluralizeListTitles: (true)Pluralize titles in lists.
preserveTaxonomyNames: false #Preserve special characters in taxonomy names ("Gérard Depardieu" vs "Gerard Depardieu").
publishDir: 'public' # The directory to where Hugo will write the final static site (the HTML files etc.).
pygmentsCodeFencesGuessSyntax: false #Enable syntax guessing for code fences without specified language.
pygmentsStyle: 'monokai' # Color-theme or style for syntax highlighting. See [Pygments Color Themes](https://help.farbox.com/pygments.html).
pygmentsUseClasses: false #Enable using external CSS for syntax highlighting.
relatedSee: '' [Related Content](/content-management/related/#configure-related-content).
relativeURLs: false #Enable this to make all relative URLs relative to content root. Note that this does not affect absolute URLs.
rssLimit: (unlimited) #Maximum number of items in the RSS feed.
sectionPagesMenu: '' # See ["Section Menu for Lazy Bloggers"](/templates/menu-templates/#section-menu-for-lazy-bloggers).
sitemapDefault: [sitemap configuration] #(/templates/sitemap-template/#configure-sitemap-xml).
staticDir: 'static' # Relative directory from where Hugo reads static files.
stepAnalysis: false #Display memory and timing of different steps of the program.
summaryLength: (70)The length of text to show in a [`.Summary`] #(/content-management/summaries/#hugo-defined-automatic-summary-splitting).
taxonomiesSee: [Configure Taxonomies] #(/content-management/taxonomies#configure-taxonomies).
theme: '' # Theme to use (located by default in `/themes/THEMENAME/`).
themesDir: ("themes' # The directory where Hugo reads the themes from.
title: ("") #Site title.
uglyURLs: false #When enabled, creates URL of the form `/filename.html` instead of `/filename/`.
verbose: false #Enable verbose output.
verboseLog: false #Enable verbose logging.
watch: false #Watch filesystem for changes and recreate as needed.
```

## Temas

### Instalar y usar temas

Si deseas instalar todos los temas, usa el siguiente script, tomara un poco de tiempo la descarga, no te olvides de que los temas van dentro de la carpeta `/themes`

```bash
git clone --depth 1 --recursive https://github.com/gohugoio/hugoThemes.git themes
```

o para instalar un tema en particular

```bash
cd themes
# por ejemplo instalamos el tema HYDE
git clone https://github.com/spf13/hyde
```

Tambien puedes configurar la carpeta de los temas actualizando la variable `themesDir` pero `NO` es recomendado.

### Uso de la linea de comandos

para cambiar entre temas puedes usar

```bash
# al construir un sitio
hugo -t hyde

# cambiar el tema en el tiempo de desarrollo
hugo server -t themename
```

o tambien puedes cambiar la variable `theme` en tu `archivo de configuracion`.

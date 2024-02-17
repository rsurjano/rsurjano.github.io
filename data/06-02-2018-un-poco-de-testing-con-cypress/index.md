---
path: '/un-poco-de-testing-con-cypress'
title: 'Un poco de testing con Cypress'
date: '2017-07-12T17:12:33.962Z'
---

## Requerimientos

practicamente puede correr en los sistemas operativos actuales gracias a que usa npm

- Mac OS 10.9+ (Mavericks+), only 64bit binaries are provided for macOS.
- Linux Ubuntu 12.04, Fedora 21, Debian 8
- Windows 7+, only 32bit binaries are provided for Windows.

## Instalacion

Cypress es un framework que ofrece una experiencia de pruebas completas de punto a punto, empecemos con la instalacion

```bash
npm install cypress --save-dev
```

<!-- more -->

### Abriendo Cypress

podemos usar la forma larga

```bash
./node_modules/.bin/cypress open
```

o la forma corta

```bash
$(npm bin)/cypress open
```

o usar [npm](https://www.npmjs.com/package/npx) que esta incluido desde `npm > v5.2` o tambien se puede instalar aparte

```bash
npx cypress open
```

o tambien agregandolo como un `script` dentro de `package.json`

```json
{
  // package.json
  "scripts": {
    "cypress:open": "cypress open"
  }
}
```

```bash
npm run cypress:open
```

### Escribiendo las pruebas

las pruebas unitarias se crean como archivos `.js` y se guardan en `cypress/integration` con la nomeclatura `mi_archivo_spec.js`

veras que una vez creado el spec aparecera en el [tablero](https://docs.cypress.io/guides/core-concepts/test-runner.html) de Cypress

creamos la prueba base

```javascript
describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(false)
  })
})
```

como viste el codigo es muy parecido a `Mocha` y `Chai` porque usa `describe` y `it` de [Mocha](https://mochajs.org/) y `expect` de [Chai](http://chaijs.com/)

### haciendo pruebas en un sitio en produccion

`Cypress` se encarga de correr las pruebas, en el escenario a continuacion haremos algunas pruebas a un sitio de reservaciones [Oakwood](https://www.oakwood.com) donde podemos realizarle diversas pruebas de `E2E`

```javascript
// basic true
describe('My First Test', function() {
  it('basic true/false!', function() {
    expect(true).to.equal(true)
  })
})

describe('visiting a website', function() {
  it('Visit oakwood', function() {
    cy.visit('https://www.oakwood.com/')
  })

  it('Visit oakwood your stay', function() {
    cy.get('.oak-globalHeader_globalNav')
    .contains('YOUR STAY').click();

    cy.url().should('include', '/your-stay')
  })

  it('Visit help', function() {
    cy.get('.oak-globalHeader_globalNav')
    .contains('HELP').click()

    cy.url().should('include', '/help')
  })

  it('querying a help', function() {
    cy.get('.oak-globalHeader_globalNav')
    .contains('HELP').click()

    // querying
    cy.get('.oak-helpFaqSearch_searchInput')
    .type('reservation')

    // clicking
    cy.get('.oak-helpFaqSearch_searchResult')
    .contains('What is required in order to make a reservation?')
    .click()

  // panel opening
    cy.get('.oak-helpFaq_panelQuestion')
    .contains('What is required in order to make a reservation?')
    .parent()
    .should('have.class', 'is-active')

    cy.url().should('include', '#faq-content')
  })
})
```

### Documentacion

La principal documentacion que vas a poder encontrar es la de la [API de cypress](https://docs.cypress.io/api/introduction/api.html) te recomiendo que le des una revisada a fondo

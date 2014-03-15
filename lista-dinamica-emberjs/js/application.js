// genera una aplicacion llamada Todos
window.Todos = Ember.Application.create();

// Extendemos nuestra aplicacion con un Fixture
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();
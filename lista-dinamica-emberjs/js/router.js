// La ruta y que da una vista llamada todos
Todos.Router.map(function() {
  this.resource('todos', { path: '/' });
});

// Se le agrega la ruta, los datos de ejemplo en el Modelo llamado todo
Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});
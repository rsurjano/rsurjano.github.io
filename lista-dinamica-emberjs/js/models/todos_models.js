// Extiende modelo para la aplicacion

//Tiene 2 atributos default y agregado idTitulo de la pelicula 
Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean'),
  idTitulo : DS.attr('string')
});


// Datos de ejemplo
Todos.Todo.FIXTURES = [
 {
   id: 1,
   title: 'Aprendiendo Ember',
   isCompleted: true,
   idTitulo : '001'
 },
 {
   id: 2,
   title: 'Este es otro titulo',
   isCompleted: false,
   idTitulo : '002' 
 },
 {
   id: 3,
   title: 'Imprimiendo otro titulo',
   isCompleted: false,
   idTitulo : '003'
 }
];
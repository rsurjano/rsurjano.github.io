var view = Ember.View.create({
  templateName: 'say-hello',
  name: "Bob"
});


// Define parent view
Todos.UserView = Ember.View.extend({
  templateName: 'user',

  firstName: "Albert",
  lastName: "Hofmann"
});

// Define child view
Todos .InfoView = Ember.View.extend({
  templateName: 'info',

  posts: 25,
  hobbies: "Riding bicycles"
});
/*
  This is a CommonJS module which exports a routes
  object with key/value pairs of regex to resource.
  The value of resource points to a filepath relative
  to the app/resources directory

  i.e.

    '^/$' : 'home'

  The above routes request to the root URL
  through to the resource defined in the
  file app/resources/home.js
*/

exports.routes = {
    '^/$': 'home',
    '^/example$': 'another_resource'
};


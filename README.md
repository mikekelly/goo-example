This is an example application using the [goo framework](https://github.com/mikekelly/goo).

Installation
------------

Install goo:

    git clone git@github.com:mikekelly/goo.git && npm link ./goo

Install and run this example app:

    git clone git@github.com:mikekelly/goo-example.git && cd goo-example && node server.js


Project Structure
-----------------

### Routes ###
- Routes are defined in config/routes.js
- This file is a CommonJS module that exports a routes object
- A route maps a URI pattern (regex) to a resouce

### Resources ###
- Resources are defined in the app/resources directory
- Resources are define in CommonJS modules that export a resource object
- The resource object has a methods property containing method handlers
- These method handlers map to HTTP methods
- Method handlers are JSGI components (i.e. functions that take an HTTP
request object as a parameter)

.. take a look through this example to see what I mean :)

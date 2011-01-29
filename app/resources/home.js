exports.resource = {
  respond_to: ["text/html"],
  methods: {
    GET: function(request) {
      return {
        status: 200,
        headers: {
          "Content-Type" : "text/html"
        },
        body: ["<html><body><h1>Welcome to goo!</h1><a href='/example'>Example</a></body></html>"]
      };
    },
    PUT: function(request){
      return {
        status: 200,
        headers: {
          "Content-Type" : "text/html"
        },
        body: ["<html><body>PUT on home resource!</body></html>"]
      };
    },
    POST: function(request){
      return {
        status: 200,
        headers: {
          "Content-Type" : "text/html"
        },
        body: ["<html><body>POST on home resource!</body></html>"]
      };
    }
  }
};


exports.resource = {
  respond_to: ["text/plain"],
  methods: {
    GET: function(request) {
      return {
        status: 200,
        headers: {
          "Content-Type" : "text/plain"
        },
        body: ["Another resource!"]
      };
    },
    POST: function(request){
      return {
        status: 200,
        headers: {
            "Content-Type" : "text/plain"
        },
        body: ["POST on another resource!"]
      };
    }
  }
};


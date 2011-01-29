exports.resource = {
  methods: {
    GET: function (request) {
      return {
        status: 200,
        headers: {
          "Content-Type": "text/plain"
        },
        body: ["Hello from app/resources/foo/test.js"]
      };
    }
  }
};

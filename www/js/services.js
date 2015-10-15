angular.module('services', [
      'ngWebSocket' // you may also use 'angular-websocket' if you prefer
    ])
    //                          WebSocket works as well
    .factory('WebSocket', function($websocket,$http) {
      // Open a WebSocket connection
      var dataStream = $websocket('wss://website.com/data');

      var messages = [];

      dataStream.onMessage(function(message) {
        messages.push(JSON.parse(message.data.message));
      });

      var methods = {
        messages: messages,
        send: function(message) {
        $http.post('/message'{ message:message}));
        }
      };

      return methods;
    });

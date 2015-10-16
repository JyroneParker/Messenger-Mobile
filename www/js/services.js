angular.module('services', [])
    //                          WebSocket works as well
    .factory('WebSocket', function($http) {
      // Open a WebSocket connection
      var dataStream = io('http://messenger.app:6001');
      console.log(dataStream);

      var messages = [];

      dataStream.on('message',function(data) {

          messages.push(data.message);
          console.log(messages);


      });

      var methods = {
        messages: messages,
        send: function(message) {
        $http.post('http://messenger.app/message',{ message:message}).success(function(data){
          ///messages.push(data);
          //console.log(messages);
        });
        }
      };

      return methods;
    });

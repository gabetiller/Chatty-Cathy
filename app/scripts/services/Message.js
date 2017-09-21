(function() {
  function Message($firebaseArray) {
    
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
    console.log(messages);

    Message.getByRoomId = function(roomId) {
      var roomMessages = $firebaseArray(ref.orderByChild("roomID").equalTo(roomId));
      console.log(roomMessages);
      return roomMessages;
    };
      //getting the message by the roomID. This way we can associate a message with a room.



    return Message;

    };




  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();

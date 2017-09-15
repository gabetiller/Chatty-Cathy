(function(){
  function Room ($firebaseArray) {
    var Room = {};
    var ref = firebase.database().ref().child('rooms');
    var rooms = $firebaseArray(ref);

    Room.all = rooms;

    Room.add = function(roomName) {
      var newRoom = {
        name: roomName
      };
      rooms.$add(newRoom);
    }

     Room.add();

    return Room;
  }


  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);

})();

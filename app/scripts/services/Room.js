(function() {
    /**
    * @function Room
    * @desc creates a list of chat rooms.
    * @returns rooms from Firebase.
    */
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        Room.all = rooms;
        /**
        * @function Room.addRoom
        * @desc adds room to database
        */
        Room.addRoom = function(room) {
            rooms.$add(room);
        }


    return Room;

}

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
// (function(){
//   function Room ($firebaseArray) {
//     var Room = {};
//     var ref = firebase.database().ref().child('rooms');
//     var rooms = $firebaseArray(ref);
//
//     Room.all = rooms;
//
//     Room.addRoom = function(roomName) {
//       var newRoom = {
//         name: roomName
//       };
//       rooms.$add(newRoom);
//       Room.addRoom('hello2');
//
//     }
//
//
//     return Room;
//   }
//
//
//   angular
//     .module('blocChat')
//     .factory('Room', ['$firebaseArray', Room]);
//
// })();

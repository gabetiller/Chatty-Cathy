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
        console.log(rooms);

        Room.all = rooms;


        /**
        * @function Room.addRoom
        * @desc adds room to database
        */

        Room.addRoom = function(newRoomName) {
            rooms.$add(newRoomName);
            console.log("addRoom is being hit")

        };

        Room.deleteRoom = function(room) {
          rooms.$remove(room);
          console.log("deleteRoom is being hit")
        }






    return Room;

}

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();

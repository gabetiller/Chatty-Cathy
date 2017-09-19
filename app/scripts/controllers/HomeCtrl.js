
(function() {
    /**
    * @function HomeCtrl
    */
    function HomeCtrl(Room, Message, $uibModal) {

        // use `this` when you want to make something public – accessible to other parts of the application
        // use `var` when you want to make something private – only usable inside of its own controller/service
        this.rooms = Room.all;
        this.heroTitle = "Bloc Chat";

        /**
        * @function openModal
        * @desc opens modal
        */

        this.openModal = function () {
            $uibModal.open({
            animation: true,
            templateUrl: '/templates/modal.html',
            controller: 'RoomCtrl as room',
          });
        };

        this.setActiveRoom = function(room) {
          this.currentRoom = room;
          this.allTheMessages = Message.getByRoomId(this.currentRoom.$id);
          console.log('activeRoom is being hit')
        };

    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$uibModal', HomeCtrl]);
})();
// (function() {
//     function HomeCtrl(Room) {
//
//       this.rooms = Room.all;
//       this.heroTitle = "Bloc Chat";
//
//     }
//
//
//     angular
//         .module('blocChat')
//         .controller('HomeCtrl', ['Room', HomeCtrl]);
// })();

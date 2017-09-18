
(function() {
    /**
    * @function HomeCtrl
    */
    function HomeCtrl(Room, $uibModal) {
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
            controller: 'ModalCtrl as modal',
          });
        };



    }
    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$uibModal', HomeCtrl]);
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

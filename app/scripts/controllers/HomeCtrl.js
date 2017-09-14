(function() {
    function HomeCtrl(Room) {

      this.rooms = Room.all;
      this.heroTitle = "Bloc Chat";

    }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();

(function() {
    function CookieCtrl($cookies, $uibModalInstance, ) {

      this.addUser = function () {
        currentUser = $cookies.put('blocChatCurrentUser', this.newUsername);
        var modelInstance = $uibModalInstance.close('close');

        console.log('Cookie Ctrl is being hit');

      }

    }


    angular
        .module('blocChat')
        .controller('CookieCtrl', ['$cookies','$uibModalInstance', CookieCtrl]);
})();

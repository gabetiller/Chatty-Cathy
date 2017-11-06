(function() {
    /**
    * @function CookieCtrl
    * @desc
    * @returns
    */
    function CookieCtrl($uibModal, $cookies) {
      this.AddUser = function (val) {
        $cookies.put('blocChatCurrentUser', val);
      }

    }


    angular
        .module('blocChat')
        .controller('CookieCtrl', ['BlocChatCookies','$cookies','$uibModal', CookieCtrl]);
})();

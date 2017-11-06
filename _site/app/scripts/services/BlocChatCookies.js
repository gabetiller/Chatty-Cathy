(function () {
    function BlocChatCookies($cookies, $uibModal) {
      var currentUser = $cookies.get('blocChatCurrentUser');
      if (!currentUser || currentUser === '') {
        $uibModal.open({
          keyboard: false,
          backdrop: 'static',
          templateUrl: '/templates/cookieModal.html',
          controller: 'CookieCtrl as cookie',
        });
     }
  }







  angular
      .module('blocChat')
      .run(['$cookies', '$uibModal', BlocChatCookies]);

})();

'use strict';
module.exports = function ($scope, $rootScope, $location, Auth) {
    $scope.menu = [{
        'title': 'Home',
        'link': '/'
    }];

    $rootScope.bodyClass = 'welcome';

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
        Auth.logout();
        $location.path('/login');
    };

    $scope.isActive = function(route) {
        return route === $location.path();
    };
};

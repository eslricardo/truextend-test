/**
 * @ngdoc overview
 * @name truextendTestApp
 * @description
 * # truextendTestApp
 *
 * Main module of the application.
 */
 (function(){

  'use strict';

  angular
    .module('truextendTestApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch'
    ])
    .config(function ($routeProvider, $locationProvider) {
      $locationProvider.hashPrefix('');
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'vm'
        })
        .when('/courses', {
          templateUrl: 'views/courses.html',
          controller: 'CoursesCtrl',
          controllerAs: 'vm'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();

/**
 * @ngdoc function
 * @name truextendTestApp.controller:CoursesCtrl
 * @description
 * # CoursesCtrl
 * Controller of the truextendTestApp
 */
(function(){
  'use strict';

  angular.module('truextendTestApp')
    .controller('CoursesCtrl', CoursesCtrl);

  CoursesCtrl.$inject = ['CourseServices'];

  function CoursesCtrl(CourseServices) {
    var vm = this;

    vm.getCourses = getCourses;

    getCourses();

    function getCourses() {
      vm.courses = CourseServices.getCoursesData();
      console.log(vm.courses);
    }
  }
})();


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
    var courses = {};

    vm.selectCourse = selectCourse;
    vm.editCourse = editCourse;
    vm.saveSingleChanges = saveSingleChanges;
    vm.discardSingleChanges = discardSingleChanges;
    vm.saveAllChanges = saveAllChanges;
    vm.discardAllChanges = discardAllChanges;

    vm.coursesChanged = {};
    vm.courseSelected = {};

    getCourses();
    cloneChangeStatus();

    function getCourses() {
      courses = CourseServices.getCoursesData();
    }

    function cloneChangeStatus() {
      vm.coursesChanged = JSON.parse(JSON.stringify(courses));
      for(var i = 0; i < vm.coursesChanged.length; i++){
        vm.coursesChanged[i].status = false;
      }
    }

    function selectCourse(index) {
      if(vm.coursesChanged[index].status) {
        vm.courseSelected = JSON.parse(JSON.stringify(vm.coursesChanged[index]));
        vm.courseSelected.index = index;
      }else{
        vm.courseSelected = JSON.parse(JSON.stringify(courses[index]));
        vm.courseSelected.index = index;
      }
    }

    function editCourse() {
      vm.coursesChanged[vm.courseSelected.index] = vm.courseSelected;
      vm.coursesChanged[vm.courseSelected.index].status = true;
      vm.courseSelected = {};
    }

    function saveSingleChanges(index) {
      CourseServices.updateCourseData(JSON.parse(JSON.stringify(vm.coursesChanged[index]))).then(function(dataResponse){
        console.log(dataResponse);
      });
      courses[index] = JSON.parse(JSON.stringify(vm.coursesChanged[index]));
      vm.coursesChanged[index].status = false;
    }

    function discardSingleChanges(index) {
      vm.coursesChanged[index] = JSON.parse(JSON.stringify(courses[index]));
      vm.coursesChanged[index].status = false;
    }

    function saveAllChanges() {
      for(var i=0; i < vm.coursesChanged.length; i++) {
        CourseServices.updateCourseData(JSON.parse(JSON.stringify(vm.coursesChanged[i]))).then(function(dataResponse){
          console.log(dataResponse);
        });
      }
      courses = JSON.parse(JSON.stringify(vm.coursesChanged));
      cloneChangeStatus();
    }

    function discardAllChanges() {
      cloneChangeStatus();
    }
  }
})();

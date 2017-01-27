/**
 * @ngdoc service
 * @name truextendTestApp.courseServices
 * @description
 * # courseServices
 * Service in the truextendTestApp.
 */
(function(){
  'use strict';

  angular.module('truextendTestApp')
    .service('CourseServices', CourseServices);

  CourseServices.$inject = ['$http'];

  function CourseServices(argument) {
    return {
      getCoursesData: getCoursesData,
      updateCourseData: updateCourseData
    };

    function getCoursesData(){
      return {
        data: {
          "id": "123",
          "name": "Introduction to Advertising",
          "description": "Learn about advertising",
          "textbooks": [
            {
            "author": "Joe Smith",
            "title": "Mobile Advertising Fundamentals"
            },
            {
            "author": "Eli Hinnegan",
            "title": "Introduction to Location-Based Advertising"
            },
            {
            "author": "Edward Bernays",
            "title": "Public Relations"
            },
          ]
        }
      }
    }

    function updateCourseData() {

    }
  }
})();

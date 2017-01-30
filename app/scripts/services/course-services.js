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

  function CourseServices($http) {
    return {
      getCoursesData: getCoursesData,
      updateCourseData: updateCourseData
    };

    function getCoursesData(){
      return [
        {
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
            }
          ]
        },{
          "id": "234",
          "name": "Introduction to Marketing",
          "description": "Learn about marketing",
          "textbooks": [
            {
            "author": "Clark Kent",
            "title": "Marketing I"
            },
            {
            "author": "Bruce Wayne",
            "title": "Marketing II"
            }
          ]
        },{
          "id": "567",
          "name": "Introduction to Marketing",
          "description": "Learn about marketing",
          "textbooks": [
            {
            "author": "Clark Kent",
            "title": "Marketing I"
            },
            {
            "author": "Bruce Wayne",
            "title": "Marketing II"
            }
          ]
        }
      ];
    }

    function updateCourseData(params) {
      return $http({
        method: 'PUT',
        url: 'http://localhost:9000/restapi/course/' + params.id,
        data: params
      })
      .then(function(response){
        console.log(response.data);
        return response.data;
      }, function(error) {
        console.log(error);
      });
    }
  }
})();

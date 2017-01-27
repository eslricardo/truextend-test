'use strict';

describe('Service: courseServices', function () {

  // load the service's module
  beforeEach(module('truextendTestApp'));

  // instantiate service
  var courseServices;
  beforeEach(inject(function (_courseServices_) {
    courseServices = _courseServices_;
  }));

  it('should do something', function () {
    expect(!!courseServices).toBe(true);
  });

});

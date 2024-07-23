const createCourse = require('../../services/course/createCourse');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, delegate) => {
  const course = await createCourse(request.body, {
    routeId: request.currentRoute.id
    // Add any additional parameters specific to course creation if needed
  });
  return course;
};

const { buildUrl } = require('@evershop/evershop/src/lib/router/buildUrl');
const { OK } = require('@evershop/evershop/src/lib/util/httpStatus');

// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, delegate, next) => {
  const course = await delegate.createCourse; // Assuming createCourse is the delegate function for course creation
  response.status(OK);
  response.json({
    data: {
      ...course,
      links: [
        {
          rel: 'courseName',
          href: buildUrl('courseName', { id: course.uuid }), // Replace 'courseDetails' with actual route name
          action: 'GET',
          types: ['text/xml']
        },
        {
          rel: 'courseCode',
          href: buildUrl('courseCode', { id: course.uuid }), // Replace 'courseEdit' with actual route name
          action: 'GET',
          types: ['text/xml']
        }
      ]
    }
  });
};

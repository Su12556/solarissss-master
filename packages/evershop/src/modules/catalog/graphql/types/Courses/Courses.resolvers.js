const { select } = require('@evershop/postgres-query-builder');
const { camelCase } = require('@evershop/evershop/src/lib/util/camelCase');

module.exports = {
  Query: {
    courses: async (_, __, { pool }) => {
      const query = select().from('courses');
      const courses = await query.execute(pool);
      return courses.map((course) => camelCase(course));
    }
  }
};

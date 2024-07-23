const { select } = require('@evershop/postgres-query-builder');
const { pool } = require('@evershop/evershop/src/lib/postgres/connection');
const { setContextValue } = require('../../../../graphql/services/contextHelper');

module.exports = async (request, response, stack, next) => {
  try {
    const query = select();
    query.from('address_form'); // Adjust the table name as needed
    query.where('address_form_id', '=', request.params.addressId); // Adjust as per your params structure

    const address = await query.load(pool);
    if (address === null) {
      response.status(404);
      next();
    } else {
      setContextValue(request, 'addressId', address.address_form_id);
      next();
    }
  } catch (e) {
    next(e);
  }
};

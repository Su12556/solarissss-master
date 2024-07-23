
const createAddressForm = require("../../services/address/createAddressForm");


// eslint-disable-next-line no-unused-vars
module.exports = async (request, response, delegate) => {
  const result = await createAddressForm(request.body, {
    routeId: request.currentRoute.id
  });
  return result;
};

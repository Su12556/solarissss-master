const createAddressForm = require('../../services/address/createAddressForm');

module.exports = async (request, response, delegate) => {
  try {
    const result = await createAddressForm(request.body, {
      routeId: request.currentRoute.id
    });
    delegate.createAddressForm = result; 
    return result;
  } catch (error) {
    console.error('Error in createAddressForm[finish]:', error.message);
    response.status(500).json({ error: 'Internal Server Error' });
  }
};

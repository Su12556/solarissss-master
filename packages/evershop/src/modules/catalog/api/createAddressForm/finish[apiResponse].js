const { buildUrl } = require('@evershop/evershop/src/lib/router/buildUrl');
const { OK } = require('@evershop/evershop/src/lib/util/httpStatus');

module.exports = async (request, response, delegate, next) => {
  try {
    const address = await delegate.createAddressForm;

    response.status(OK);
    response.json({
      data: {
        ...address,
        links: [
          {
            rel: 'addressGrid',
            href: buildUrl('addressGrid'),
            action: 'GET',
            types: ['text/xml']
          },
          {
            rel: 'view',
            href: buildUrl('addressView', { address_form_id: address.address_form_id }),
            action: 'GET',
            types: ['text/xml']
          },
          {
            rel: 'edit',
            href: buildUrl('addressEdit', { address_form_id: address.address_form_id }),
            action: 'GET',
            types: ['text/xml']
          }
        ]
      }
    });
  } catch (error) {
    console.error('Error in finish[apiResponse]:', error.message);
    response.status(500);
    response.json({ error: 'Internal Server Error' });
  }
};

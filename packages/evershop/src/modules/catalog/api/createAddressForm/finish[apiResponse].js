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
                        rel: 'addressList',
                        href: buildUrl('addressList'),
                        action: 'GET',
                        types: ['text/xml']
                    },
                    {
                        rel: 'view',
                        href: buildUrl('addressView', { id: address.id }),
                        action: 'GET',
                        types: ['text/xml']
                    },
                    {
                        rel: 'edit',
                        href: buildUrl('addressEdit', { id: address.id }),
                        action: 'GET',
                        types: ['text/xml']
                    }
                ]
            }
        });
    } catch (error) {
        console.error('Error in middleware finish:', error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
};

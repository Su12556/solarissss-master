  
    const { select } = require('@evershop/postgres-query-builder');

    const getAddressesBaseQuery = () => {
    return select()
        .from('address_form')
        .fields([
        'address_form_id',
        'full_name',
        'telephone',
        'address',
        'city',
        'country',
        'province',
        'post_code'
        ]);
    };

    module.exports = { getAddressesBaseQuery };

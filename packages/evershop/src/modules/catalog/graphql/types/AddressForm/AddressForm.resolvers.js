const { camelCase } = require('@evershop/evershop/src/lib/util/camelCase');
const { AddressCollection } = require('@evershop/evershop/src/modules/address/services/AddressCollection');
const { getAddressesBaseQuery } = require('@evershop/evershop/src/modules/address/services/getAddressesBaseQuery');

module.exports = {
  Query: {
    addressForm: async (_, { id }, { pool }) => {
      try {
        const query = getAddressesBaseQuery();
        query.where('address_form.address_form_id', '=', id); // Ensure the column name matches your database schema
        const result = await query.load(pool);
        return result ? camelCase(result) : null;
      } catch (error) {
        console.error('Error fetching address form:', error);
        throw new Error('Failed to fetch address form');
      }
    },
    addressForms: async (_, { filters = [] }, { user, pool }) => {
      try {
        const query = getAddressesBaseQuery();
        const root = new AddressCollection(query);
        await root.init(filters, !!user);
        const results = await root.getResults(pool);
        return results.map(result => camelCase(result));
      } catch (error) {
        console.error('Error fetching address forms:', error);
        throw new Error('Failed to fetch address forms');
      }
    }
  },
  Mutation: {
    createAddressForm: async (_, { input }, { pool }) => {
      try {
        const { full_name, telephone, address, city, country, province, post_code } = input;

        // Input validation (optional but recommended)
        if (!full_name || !telephone || !address || !city || !country || !post_code) {
          throw new Error('All required fields must be provided');
        }

        const result = await pool.query(`
          INSERT INTO address_form (full_name, telephone, address, city, country, province, post_code)
          VALUES ($1, $2, $3, $4, $5, $6, $7)
          RETURNING *
        `, [full_name, telephone, address, city, country, province, post_code]);
        
        return camelCase(result.rows[0]);
      } catch (error) {
        console.error('Error creating address form:', error);
        throw new Error('Failed to create address form');
      }
    }
  }
};

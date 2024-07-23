const { getAddressesBaseQuery } = require('./getAddressesBaseQuery');

class AddressCollection {
  constructor() {
    this.query = getAddressesBaseQuery();
  }

  async init(filters = [], user = null) {
    try {
      if (filters.length > 0) {
        filters.forEach((filter) => {
          const { field, value } = filter;
          this.query.where(field, '=', value);
        });
      }

      if (user) {
        // Add any user-specific query logic here
        // Example: this.query.where('user_id', '=', user.id);
      }
    } catch (error) {
      console.error('Error initializing AddressCollection:', error);
      throw error; // Propagate the error
    }
  }

  async getResults(pool) {
    try {
      return await this.query.load(pool);
    } catch (error) {
      console.error('Error fetching results from AddressCollection:', error);
      throw error; // Propagate the error
    }
  }
}

module.exports = { AddressCollection };

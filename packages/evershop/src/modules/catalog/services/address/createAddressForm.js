const { hookable } = require('@evershop/evershop/src/lib/util/hookable');
const {
  startTransaction,
  commit,
  rollback,
  insert
} = require('@evershop/postgres-query-builder');
const { getConnection } = require('@evershop/evershop/src/lib/postgres/connection');
const { getAjv } = require('../../../base/services/getAjv');
const addressDataSchema = require('./addressDataSchema.json');
const { getValueSync } = require('@evershop/evershop/src/lib/util/registry');

function validateAddressDataBeforeInsert(data) {
  const ajv = getAjv();
  // console.log('validateAddressDataBeforeInsert ' , data);
  // Ensure that the schema correctly specifies required fields and any additional constraints
  addressDataSchema.required = [
    'full_name',
    'telephone',
    'address',
    'city',
    'country',
    'province',
    'post_code'
  ];
  const jsonSchema = getValueSync(
    'createAddressDataJsonSchema',
    addressDataSchema
  );

  const validate = ajv.compile(jsonSchema);
  const valid = validate(data);
  if (!valid) {
    console.error('Validation errors:', validate.errors);
    validate.errors.forEach(error => {
      console.error(`Error at ${error.dataPath}: ${error.message}`);
    });
    throw new Error(validate.errors.map(error => error.message).join(', '));
  }
  return data;
}

async function insertAddressData(data, connection) {
  try {
    const address = await insert('address_form').given(data).execute(connection);
    console.log('Aa gaya na bhaiii');
    console.log(address)
    return address;
  } catch (error) {
    console.error('Error inserting address data:', error.message);
    throw error;
  }
}

async function createAddress(data, context) {
  const connection = await getConnection();
  await startTransaction(connection);
  try {
    validateAddressDataBeforeInsert(data);

    const address = await hookable(insertAddressData, {
      connection,
      ...context
    })(data, connection);

    await commit(connection);
    return address;
  } catch (e) {
    console.error('Error in createAddress:', e.message);
    await rollback(connection);
    throw e;
  }
}

module.exports = async (data, context) => {
  if (context && typeof context !== 'object') {
    throw new Error('Context must be an object');
  }
  try {
    const address = await hookable(createAddress, context)(data, context);
    return address;
  } catch (error) {
    console.error('Error in module export:', error.message);
    throw error;
  }
};

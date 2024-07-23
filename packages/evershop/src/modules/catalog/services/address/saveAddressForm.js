// const { insert } = require('@evershop/postgres-query-builder');
// const { pool } = require('@evershop/evershop/src/lib/postgres/connection');

// // Example function to save address form data
// async function saveAddressForm(formData) {
//   try {
//     // Example query to insert data into the database
//     const result = await insert('address_form')
//       .values(formData)
//       .execute(pool);

//     // Assuming successful insertion, return the inserted data or ID
//     const insertedAddress = {
//       id: result.insertId, // Example: retrieve the ID of the inserted row
//       ...formData
//     };

//     return insertedAddress;
//   } catch (error) {
//     // Handle any errors, log them, and potentially throw or return an error object
//     console.error('Error saving address form:', error);
//     throw new Error('Failed to save address form');
//   }
// }

// module.exports = {
//   saveAddressForm
// };


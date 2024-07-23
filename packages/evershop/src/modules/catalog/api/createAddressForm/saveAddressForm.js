// const { pool } = require('@evershop/evershop/src/lib/postgres/connection');
// const { insert } = require('@evershop/postgres-query-builder');

// module.exports = async (req, res, next) => {
//   console.log("saveAddressForm " , req);
//   const { full_name, telephone, address, city, country, province, post_code } = req.body;

//   // Check for required fields
//   if (!full_name || !telephone || !address || !city || !country || !province || !post_code) {
//     console.log('Validation failed: Missing required fields');
//     /* if (!res.headersSent) {
//       return res.status(400).json({ error: 'All fields are required' });
//     } */
//     return; // Ensure no further processing
//   }

//   try {
//     console.log('Request body:', req.body);

//     // Insert data into the database
//     await insert('address_form')
//       .values({
//         full_name,
//         telephone,
//         address,
//         city,
//         country,
//         province,
//         post_code
//       })
//       .execute(pool);

//       // return res.status(201).json({ message: 'Address form saved successfully' });
//       return;

//     // Send success response
//     /* if (!res.headersSent) {
//       return res.status(201).json({ message: 'Address form saved successfully' });
//     } */
//   } catch (error) {
//     console.error('Error saving address form:', error);
//     // next();
//     return;
//     // return res.status(500).json({ error: 'Internal Server Error' });

//     // Send error response
//     /* if (!res.headersSent) {
//     } */
//   }
  
//   // Additional logging if response is sent
//   /* if (res.headersSent) {
//     console.log('Response already sent');
//   } */
// };

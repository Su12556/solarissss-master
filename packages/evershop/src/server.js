const express = require('express');
const bodyParser = require('body-parser');
const { insert, select } = require('@evershop/postgres-query-builder');
const { pool } = require('./lib/postgres/connection');
const { addressSchema } = require('./lib/validation/validation');
const apiResponse = require('./modules/base/api/global/[apiResponse]apiErrorHandler');
const saveAddressForm = require('./modules/catalog/api/createAddressForm/saveAddressForm');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Test database connection
pool.connect((err) => {
    if (err) {
        console.error('Database connection error:', err.stack);
    } else {
        console.log('Connected to database');
    }
});

const validate = (req, res, next) => {
    const { error } = addressSchema.validate(req.body);
    if (error) {
        console.error('Validation error:', error.details);
        return res.status(400).json({ 
            message: 'Validation error',
            details: error.details.map(detail => ({
                message: detail.message,
                path: detail.path,
                type: detail.type,
                context: detail.context,
            })),
        });
    }
    next();
};

app.post('/api/addressForm', validate, saveAddressForm, async (req, res) => {
    console.log('Received request body:', req.body);

    const { full_name, telephone, address, city, country, province, post_code } = req.body;

    try {
        console.log('Inserting data into address_form...');
        const addressResult = await insert('address_form')
            .set({
                full_name: full_name,
                telephone: telephone,
                address: address,
                city: city,
                country: country,
                province: province || null, // Ensure province is null if not provided
                post_code: post_code
            })
            .execute(pool);

        console.log('Insert result:', addressResult);

        if (!addressResult.insertId) {
            console.error('Insert failed, no ID returned');
            throw new Error('Insert failed, no ID returned');
        }

        console.log('Fetching inserted data...');
        const insertedData = await select()
            .from('address_form')
            .where('address_form_id', '=', addressResult.insertId)
            .load(pool);

        console.log('Inserted data:', insertedData);

        res.status(200).json({
            message: 'Data inserted successfully',
            data: insertedData
        });
    } catch (error) {
        // console.error('Error inserting address form:', error.stack || error);
        // res.status(500).json({ message: 'Server error', error: error.message });
    }
});

// app.use(apiResponse);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

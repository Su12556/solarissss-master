import PropTypes from 'prop-types';
import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const provincesInIndia = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar",
  "Chhattisgarh", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana",
  "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
];

function AddressForm({ address, handleChange, currentStep }) {
  const [errorMessage, setErrorMessage] = useState("");

  const handleBlur = (e) => {
    if (e.target.value === "") {
      setErrorMessage(`Please fill in the ${e.target.name}.`);
    } else {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const addressData = {
      full_name: address.full_name,
      telephone: address.telephone,
      address: address.address,
      city: address.city,
      country: address.country,
      province: address.province,
      post_code: address.post_code,
    };
    console.log('Submitting data:', addressData);
  
    try {
      const response = await axios.post('http://localhost:3001/api/addressForm', addressData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Saved data:', response.data);
  
      // Close the modal
      const modalElement = document.getElementById('opModal');
      if (modalElement) {
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
          modalInstance.hide();
        }
      }
  
      // Show success message
      toast.success('Form submitted successfully!');
      alert('Address saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
      // Show error message
      toast.error('Error saving address. Please try again.');
    }
  };

  return (
    currentStep === 3 && (
      <div>
        <ToastContainer />
        <h3>Address Form</h3>
        <form id="addressForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              name="full_name"
              value={address.full_name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telephone" className="form-label">Telephone</label>
            <input
              type="text"
              className="form-control"
              id="telephone"
              name="telephone"
              value={address.telephone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={address.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={address.city}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="form-label">Country</label>
            <select
              className="form-select"
              id="country"
              name="country"
              value={address.country}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select a country</option>
              <option value="INDIA">India</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {address.country === 'INDIA' && (
            <div className="mb-3">
              <label htmlFor="province" className="form-label">Province</label>
              <select
                className="form-select"
                id="province"
                name="province"
                value={address.province}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select a province</option>
                {provincesInIndia.map((province, index) => (
                  <option key={index} value={province}>{province}</option>
                ))}
              </select>
            </div>
          )}
          {(address.country === 'US' || address.country === 'CA') && (
            <div className="mb-3">
              <label htmlFor="province" className="form-label">Province</label>
              <input
                type="text"
                className="form-control"
                id="province"
                name="province"
                value={address.province}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="post_code" className="form-label">Postcode</label>
            <input
              type="text"
              className="form-control"
              id="post_code"
              name="post_code"
              value={address.post_code}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  );
}

AddressForm.propTypes = {
  address: PropTypes.shape({
    full_name: PropTypes.string,
    telephone: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    country: PropTypes.string,
    province: PropTypes.string,
    post_code: PropTypes.string,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
};

export const layout = {
  areaId: 'content',
  sortOrder: 10
};

export const query = `
  query Query {
    action: url(routeId: "createAddressForm")
    addressForm (id: getContextValue('address_form_id')) {
      full_name
      telephone
      address
      city
      country
      province
      post_code
    }
  }
`;

export default AddressForm;

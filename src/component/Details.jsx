import React from 'react';
import { useLocation } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const formval = location.state;

  return (
    <div>
      <p className='text-center font-xl underline font-bold'>Form Details</p>
      <p><strong>First Name:</strong> {formval.firstname}</p>
      <p><strong>Last Name:</strong> {formval.secondname}</p>
      <p><strong>Username:</strong> {formval.username}</p>
      <p><strong>E-mail:</strong> {formval.email}</p>
      <p><strong>Phone No.:</strong> {formval.phoneno}</p>
      <p><strong>Country:</strong> {formval.country}</p>
      <p><strong>City:</strong> {formval.city}</p>
      <p><strong>Pan No.:</strong> {formval.panno}</p>
      <p><strong>Aadhar No.:</strong> {formval.aadharno}</p>
    </div>
  );
};

export default Details;
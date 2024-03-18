import React, { useState } from 'react';

import LoginForm from './LoginForm';


const Popup = ({ onClose }) => {


  const handleClose = (e) => {
    // Close the popup only if the click is outside the form
    if (e.target.parentNode.localName !== 'form') {
      onClose();
    }
  };


  return (
    <div onClick={handleClose} className="fixed inset-0 bg-gray-800 bg-opacity-50">

      <LoginForm />

    </div>
  );
};

export default Popup;

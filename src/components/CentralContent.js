import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CentralContent = ({ onClick }) => {
  return (
    <div>
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button className="btn btn-primary" onClick={onClick}>Est laborum</button>
    </div>
  );
};


export default CentralContent;

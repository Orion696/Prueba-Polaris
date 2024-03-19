import React from 'react';

const Acordeon = ({ children, isOpen, setIsOpen }) => {
  return (
    <div className="acordeon-container">
      <button onClick={() => setIsOpen(!isOpen)} className="acordeon-toggle">Menú</button>
      {isOpen && (
        <div className="acordeon-content">
          {children}
        </div>
      )}
    </div>
  );
};

export default Acordeon;

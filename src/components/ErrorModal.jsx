import React from "react";
import "./ErrorModal.css";

const ErrorModal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <header>
          <h2>Invalid DTC Code</h2>
        </header>
        <footer className="modal-close">
          <button type="button" onClick={onClose}>Close</button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;

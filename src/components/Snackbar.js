import React, { useState, useEffect } from "react";

const Snackbar = ({ message, onClose }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);

    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 3000); // Close Snackbar after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`snackbar ${isOpen ? "show" : ""}`}>
      <p>{message}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Snackbar;

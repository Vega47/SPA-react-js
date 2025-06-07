import React, { useState } from "react";
import "./Modal.css";
export default function Modal({ src, alt, className }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`thumbnail ${className || ""}`}
        onClick={openModal}
        style={{ cursor: "pointer" }}
      />
      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <img src={src} alt={alt} className="modal-image" />
            {alt && <div className="image-caption">{alt}</div>}
          </div>
        </div>
      )}
    </>
  );
}

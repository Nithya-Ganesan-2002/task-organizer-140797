/**
 * PUBLIC_INTERFACE
 * Reusable popup component styled per Figma design system
 * Props:
 *  - message: main popup text
 *  - onClose: close handler
 */
import React from 'react';

type PopupProps = {
  message: string;
  onClose: () => void;
};

const Popup: React.FC<PopupProps> = ({ message, onClose }) => (
  <div className="popup-container"
    style={{
      position: 'fixed', zIndex: 100, top: 0, left: 0,
      width: '100vw', height: '100vh',
      background: 'rgba(17,22,34,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center'
    }}
    aria-modal="true" role="dialog"
  >
    <div className="card" style={{ minWidth: 320, textAlign: 'center', position: 'relative' }}>
      <button aria-label="Close" onClick={onClose} style={{
        background: 'none',
        border: 'none',
        position: 'absolute',
        top: 16,
        right: 16,
        fontSize: 18,
        cursor: 'pointer'
      }}>&times;</button>
      <div style={{ margin: '2em 0 1.5em 0', fontSize: 18 }}>{message}</div>
      <button className="button-primary" style={{ width: '90%' }} onClick={onClose}>
        Close
      </button>
    </div>
  </div>
);

export default Popup;

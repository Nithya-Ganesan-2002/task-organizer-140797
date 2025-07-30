'use client';
// PUBLIC_INTERFACE
/**
 * Demo page for popup extracted from Figma.
 * Shows styling, accessibility, and usage pattern.
 */

import React, { useState } from 'react';
import { Popup } from '../../components';

export default function PopupDemoPage() {
  const [show, setShow] = useState(false);

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(#f4f7fe, #dde7f1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <button className="button-primary" style={{ fontSize: 22, padding: '0.7em 2.5em' }} onClick={()=>setShow(true)}>
        Show Popup
      </button>
      {show && <Popup message="Figma-styled Popup Example" onClose={() => setShow(false)} />}
    </div>
  );
}

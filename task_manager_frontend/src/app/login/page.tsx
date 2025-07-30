'use client';
// PUBLIC_INTERFACE
/**
 * Login page using extracted Figma styles and design tokens.
 * - Uses global design system
 * - Modern, centered layout
 * - Placeholder for auth logic
 */

import React, { useState } from 'react';
import Image from 'next/image';

export default function LoginPage() {
  // State for form fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  // PUBLIC_INTERFACE
  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Integrate with backend/auth provider
    setShowPopup(true);
  }

  // PUBLIC_INTERFACE
  function closePopup() {
    setShowPopup(false);
  }

  return (
    <div className="login-container">
      <div className="card" style={{ width: '100%', maxWidth: 370 }}>
        {/* Example: replace with SVG/logo as needed */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        {/* <img src="/favicon.ico" alt="App Logo" className="login-logo" /> */}
        <Image
          src="/favicon.ico"
          alt="App Logo"
          width={110}
          height={110}
          className="login-logo"
          priority
        />
        <h2 className="text-center" style={{ marginBottom: '1em' }}>Sign in to Task Manager</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            className="input-field"
            placeholder="Email address"
            autoComplete="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input-field"
            placeholder="Password"
            autoComplete="current-password"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" className="button-primary" style={{ width: '100%' }}>
            Login
          </button>
        </form>
        <div className="text-center" style={{ marginTop: '1.5em', fontSize: 14 }}>
          <a href="#" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>Forgot password?</a>
        </div>
      </div>
      {showPopup && <Popup message="Login action is a placeholder. Integrate authentication backend." onClose={closePopup} />}
    </div>
  );
}

// PUBLIC_INTERFACE
type PopupProps = {
  message: string;
  onClose: () => void;
};

/** Simple popup modal extracted from Figma design, for demo only */
function Popup({ message, onClose }: PopupProps) {
  return (
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
}

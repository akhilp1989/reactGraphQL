import React from 'react'
import './button.styles.scss'
const buttonComponent =({
    children,
    isGoogleSignIn,
    inverted,
    ...otherProps
  }) => (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );

export default buttonComponent


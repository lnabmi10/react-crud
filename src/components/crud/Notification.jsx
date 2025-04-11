
import React from 'react';

function Notification({ message, type }) {
  if (!message) return null;

  const alertClass = type === 'error' ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertClass}`} role="alert">
      {message}
    </div>
  );
}

export default Notification;

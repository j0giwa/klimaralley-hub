
/**
 * Alert Component
 * 
 * @param {Object} props - The props of the component.
 * @param {string} props.message - The alert message to display.
 * @param {string} props.type - The type of the alert (e.g., 'success', 'error').
 * @param {function} props.onClose - Function to call when the alert is closed.
 * @returns {JSX.Element}
 */
function Alert({ message, type = 'info', onClose }) {
  
  /** @type {string} */
  let alertClass = '';

  // HACK: Predefindes class strings to circumvent tailwind purge
  if (type === 'success') {
    alertClass = 'alert alert-success shadow-lg';
  } else if (type === 'error') {
    alertClass = 'alert alert-error shadow-lg';
  } else {
    alertClass = 'alert alert-info shadow-lg';
  }

  return (
    <div className={alertClass}>
      <div>
        <span>{message}</span>
      </div>
      <button className="btn btn-sm btn-circle btn-ghost" onClick={onClose}>
        &times;
      </button>
    </div>
  );
}

export default Alert;

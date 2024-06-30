import React from 'react';

/**
 * Alert Component
 * 
 * @param {Object} props - The props of the component.
 * @param {string} props.message - The alert message to display.
 * @param {string} [props.type] - The type of the alert (e.g., 'success', 'error').
 * @param {function} props.onClose - Function to call when the alert is closed.
 * @returns {JSX.Element}
 */
function Alert({ message, type = 'info', onClose }) {
	return (
		<div className={`alert alert-${type} shadow-lg`}>
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

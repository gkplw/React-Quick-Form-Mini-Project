function FormField({ label, id, children, error }) {
  return (
    <div className="input-container">
      <label htmlFor={id} className="block font-medium mb-1">
        {label}
      </label>
      {children}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default FormField;

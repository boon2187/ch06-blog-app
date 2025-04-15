export default function Label({ htmlFor, children, className = "" }) {
  return (
    <label
      htmlFor={htmlFor}
      className={`w-32 text-sm font-medium text-left ${className}`}
    >
      {children}
    </label>
  );
}

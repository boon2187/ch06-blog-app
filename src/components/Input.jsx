export default function Input({
  id,
  type = "text",
  register,
  isSubmitting,
  showValidation,
  errors,
}) {
  return (
    <div className="flex-1">
      <input
        id={id}
        type={type}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        {...register(id)}
        disabled={isSubmitting}
      />
      {showValidation && errors && errors[id] && (
        <p className="text-red-500 text-xs mt-1">{errors[id].message}</p>
      )}
    </div>
  );
}

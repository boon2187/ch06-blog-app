export default function TextArea({
  id,
  rows = "5",
  register,
  isSubmitting,
  showValidation,
  errors,
}) {
  return (
    <div className="flex-1">
      <textarea
        id={id}
        rows={rows}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
        {...register(id)}
        disabled={isSubmitting}
      ></textarea>
      {showValidation && errors && errors[id] && (
        <p className="text-red-500 text-xs mt-1">{errors[id].message}</p>
      )}
    </div>
  );
}

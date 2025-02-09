export default function FormInput({ label, id, type = "text", autoComplete }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2.5">
        <input
          type={type}
          name={id}
          id={id}
          autoComplete={autoComplete}
          className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  )
} 
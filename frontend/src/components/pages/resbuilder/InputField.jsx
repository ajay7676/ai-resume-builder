
const InputField = ({ label,
  icon: Icon,
  placeholder,
  name,
  value,
  handleChange,
  required = false,}) => {
  return (
    <div className="space-y-1 mt-5">
      <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
        <Icon  className="text-md text-gray-600"  />

        {label}

        {required && <span className="text-red-500">*</span>}
      </label>

      <input
        type="text"
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        onChange={handleChange}
        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors text-sm placeholder:text-sm  placeholder:text-gray-400"
      />
    </div>
  )
}

export default InputField
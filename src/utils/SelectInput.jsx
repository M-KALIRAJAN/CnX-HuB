
export default function SelectInput({
  label,
  options = [],
  defaultValue = '',
  onChange,
  name,
  className = ''
}) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-bold text-gray-700 mb-3">
          {label}
        </label>
      )}
      <select
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        className="w-full bg-gray-50 text-gray-700 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 "
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

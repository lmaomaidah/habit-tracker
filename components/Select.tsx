interface SelectProps {
  value: string;
  options: string[];
  placeholder: string; // the first, empty option
  onChange: (value: string) => void;
}

export default function Select({ value, options, placeholder, onChange }: SelectProps) {
  return (
    <select
      value={value}
      aria-label={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-full border-2 border-ink/15 bg-white px-4 py-2.5 outline-none focus:border-ink"
    >
      <option value="">{placeholder}</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}

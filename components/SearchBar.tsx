interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="search"
      placeholder="Search habits"
      aria-label="Search habits"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-full border-2 border-ink/15 bg-white px-4 py-2.5 outline-none focus:border-ink"
    />
  );
}

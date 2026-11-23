import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  error?: string;
  children: ReactNode; // the input itself
}

export default function FormField({ label, error, children }: FormFieldProps) {
  return (
    <div className="mb-5">
      <label className="block font-semibold">
        {label}
        <span className="mt-2 block font-normal">{children}</span>
      </label>
      {error && <p className="mt-2 text-sm font-medium text-fitness">{error}</p>}
    </div>
  );
}

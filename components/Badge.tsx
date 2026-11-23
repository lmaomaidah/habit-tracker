interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium">{label}</span>
  );
}

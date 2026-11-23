interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mb-8 max-w-2xl">
      <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{title}</h1>
      <p className="mt-3 text-lg text-ink/70">{subtitle}</p>
    </div>
  );
}

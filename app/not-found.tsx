import Button from "@/components/Button";
import PageHeader from "@/components/PageHeader";

export default function NotFound() {
  return (
    <div>
      <PageHeader title="Page not found" subtitle="The page or habit you are looking for does not exist." />
      <Button href="/">Go home</Button>
    </div>
  );
}

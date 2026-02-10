import { Badge } from "@aceuidev/badge";

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

export default function StartEndContentSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Badge · Start & End Content</h2>
      <p>Optional startContent and endContent slots for icons or other content.</p>
      <div className="demo-row">
        <Badge startContent={<StarIcon />} color="primary">With start</Badge>
        <Badge endContent={<CheckIcon />} color="success">With end</Badge>
        <Badge startContent={<StarIcon />} endContent={<CheckIcon />} color="secondary">Both</Badge>
      </div>
    </section>
  );
}

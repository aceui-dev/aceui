import { Badge } from "@aceuidev/badge";

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function CombinationsSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Badge · Combinations</h2>
      <p>Examples of various combinations of variants, colors, sizes, and radius.</p>

      <h3 className="demo-subtitle">Variants × Colors</h3>
      <div className="demo-row">
        <Badge variant="solid" color="primary">Solid Primary</Badge>
        <Badge variant="bordered" color="secondary">Bordered Secondary</Badge>
        <Badge variant="light" color="success">Light Success</Badge>
        <Badge variant="shadow" color="danger">Shadow Danger</Badge>
        <Badge variant="dot" color="warning">Dot Warning</Badge>
      </div>

      <h3 className="demo-subtitle">Sizes × Variants</h3>
      <div className="demo-row">
        <Badge size="small" variant="bordered" color="primary">Small</Badge>
        <Badge size="medium" variant="bordered" color="primary">Medium</Badge>
        <Badge size="large" variant="bordered" color="primary">Large</Badge>
      </div>

      <h3 className="demo-subtitle">Radius × Variants</h3>
      <div className="demo-row">
        <Badge radius="small" variant="light" color="primary">Small Radius</Badge>
        <Badge radius="medium" variant="light" color="primary">Medium Radius</Badge>
        <Badge radius="full" variant="solid" color="primary">Full (Pill)</Badge>
      </div>

      <h3 className="demo-subtitle">With Start / End Content</h3>
      <div className="demo-row">
        <Badge variant="solid" color="success" startContent={<StarIcon />}>With start</Badge>
        <Badge variant="dot" color="primary" size="large">Dot Large</Badge>
        <Badge variant="bordered" color="secondary" radius="small" size="small">Small Bordered</Badge>
      </div>

      <h3 className="demo-subtitle">Complex Combinations</h3>
      <div className="demo-row">
        <Badge variant="shadow" color="primary" size="large" radius="full">
          Large Shadow Pill
        </Badge>
        <Badge variant="bordered" color="danger" size="small" radius="small">
          Small Bordered Danger
        </Badge>
        <Badge variant="light" color="success" size="medium" radius="medium">
          Medium Light Success
        </Badge>
      </div>
    </section>
  );
}

import { Button } from "@aceuidev/button";

// Simple SVG icons for demo
const SaveIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
    <polyline points="17 21 17 13 7 13 7 21"></polyline>
    <polyline points="7 3 7 8 15 8"></polyline>
  </svg>
);

const SearchIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <path d="m21 21-4.35-4.35"></path>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const ArrowLeftIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);

export default function IconSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Button · Icon</h2>
      <p>Buttons can include icons on the left or right, or be icon-only.</p>
      <div className="demo-row">
        <Button icon={<SaveIcon />} iconPosition="left">
          Save
        </Button>
        <Button icon={<ArrowRightIcon />} iconPosition="right">
          Next
        </Button>
        <Button icon={<SearchIcon />} ariaLabel="Search" />
        <Button variant="bordered" icon={<ArrowLeftIcon />} iconPosition="left">
          Back
        </Button>
        <Button variant="light" icon={<SaveIcon />} iconPosition="right">
          Save Changes
        </Button>
      </div>
    </section>
  );
}

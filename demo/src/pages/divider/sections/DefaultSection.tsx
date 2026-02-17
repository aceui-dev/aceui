import { Divider } from "@aceuidev/divider";

export default function DefaultSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Divider · Default</h2>
      <p>Default divider with horizontal orientation.</p>
      <div className="demo-column" style={{ width: 'auto', maxWidth: '184px' }}>
        <div>Content above the divider</div>
        <Divider className="my-4" />
        <div>Content below the divider</div>
      </div>
    </section>
  );
}

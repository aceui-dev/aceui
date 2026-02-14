import { Divider } from "@aceuidev/divider";

export default function OrientationSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Divider · Orientation</h2>
      <p>Dividers can be horizontal or vertical.</p>
      
      <h3>Horizontal (default)</h3>
      <div className="demo-column" style={{ marginBottom: '2rem', width: 'auto', maxWidth: '184px' }}>
        <div>First section</div>
        <Divider orientation="horizontal" className="my-4" />
        <div>Second section</div>
        <Divider className="my-4" />
        <div>Third section</div>
      </div>

      <h3>Vertical</h3>
      <div className="demo-row" style={{ height: '2rem' }}>
        <div>Left content</div>
        <Divider orientation="vertical" className="my-4" />
        <div>Middle content</div>
        <Divider orientation="vertical" className="my-4" />
        <div>Right content</div>
      </div>
    </section>
  );
}

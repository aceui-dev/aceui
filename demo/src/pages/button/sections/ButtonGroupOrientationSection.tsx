import { Button, ButtonGroup } from "@aceuidev/button";

export default function ButtonGroupOrientationSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Button Group · Orientation</h2>
      <p>
        Use <code>orientation</code> to lay out buttons horizontally or vertically.
      </p>
      <div className="demo-row" style={{ gap: "2rem", flexWrap: "wrap" }}>
        <div>
          <h3 className="demo-subtitle">Horizontal (default)</h3>
          <ButtonGroup orientation="horizontal">
            <Button variant="bordered">First</Button>
            <Button variant="bordered">Second</Button>
            <Button variant="bordered">Third</Button>
          </ButtonGroup>
        </div>
      </div>
      <div className="demo-row" style={{ gap: "2rem", flexWrap: "wrap" }}>
        <div>
          <h3 className="demo-subtitle">Vertical</h3>
          <ButtonGroup orientation="vertical">
            <Button variant="bordered">First</Button>
            <Button variant="bordered">Second</Button>
            <Button variant="bordered">Third</Button>
          </ButtonGroup>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@aceuidev/button";

export default function VariantsSection() {
  return (
    <section className="demo-section">
      <h2>Button · Variants</h2>
      <p>Six different visual style variants.</p>
      <div className="demo-row">
        <Button variant="solid" color="primary">
          Solid
        </Button>
        <Button variant="bordered" color="primary">
          Bordered
        </Button>
        <Button variant="light" color="primary">
          Light
        </Button>
        <Button variant="flat" color="primary">
          Flat
        </Button>
        <Button variant="shadow" color="primary">
          Shadow
        </Button>
        <Button variant="ghost" color="primary">
          Ghost
        </Button>
      </div>
    </section>
  );
}

import { Button } from "@aceuidev/button";

export default function VariantsSection() {
  return (
    <section className="demo-section">
      <h2>Button · Variants</h2>
      <p>Six different visual style variants.</p>
      <div className="demo-row">
        <Button variant="solid" color="default">
          Solid
        </Button>
        <Button variant="bordered" color="default">
          Bordered
        </Button>
        <Button variant="light" color="default">
          Light
        </Button>
        <Button variant="flat" color="default">
          Flat
        </Button>
        <Button variant="shadow" color="default">
          Shadow
        </Button>
        <Button variant="ghost" color="default">
          Ghost
        </Button>
      </div>
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
      <div className="demo-row">
        <Button variant="solid" color="secondary">
          Solid
        </Button>
        <Button variant="bordered" color="secondary">
          Bordered
        </Button>
        <Button variant="light" color="secondary">
          Light
        </Button>
        <Button variant="flat" color="secondary">
          Flat
        </Button>
        <Button variant="shadow" color="secondary">
          Shadow
        </Button>
        <Button variant="ghost" color="secondary">
          Ghost
        </Button>
      </div>
      <div className="demo-row">
        <Button variant="solid" color="success">
          Solid
        </Button>
        <Button variant="bordered" color="success">
          Bordered
        </Button>
        <Button variant="light" color="success">
          Light
        </Button>
        <Button variant="flat" color="success">
          Flat
        </Button>
        <Button variant="shadow" color="success">
          Shadow
        </Button>
        <Button variant="ghost" color="success">
          Ghost
        </Button>
      </div>
      <div className="demo-row">
        <Button variant="solid" color="warning">
          Solid
        </Button>
        <Button variant="bordered" color="warning">
          Bordered
        </Button>
        <Button variant="light" color="warning">
          Light
        </Button>
        <Button variant="flat" color="warning">
          Flat
        </Button>
        <Button variant="shadow" color="warning">
          Shadow
        </Button>
        <Button variant="ghost" color="warning">
          Ghost
        </Button>
      </div>
      <div className="demo-row">
        <Button variant="solid" color="danger">
          Solid
        </Button>
        <Button variant="bordered" color="danger">
          Bordered
        </Button>
        <Button variant="light" color="danger">
          Light
        </Button>
        <Button variant="flat" color="danger">
          Flat
        </Button>
        <Button variant="shadow" color="danger">
          Shadow
        </Button>
        <Button variant="ghost" color="danger">
          Ghost
        </Button>
      </div>
    </section>
  );
}

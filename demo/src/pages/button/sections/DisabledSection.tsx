import { Button } from "@aceuidev/button";

export default function DisabledSection() {
  return (
    <section className="demo-section">
      <h2>Button · Disabled</h2>
      <p>Disabled buttons prevent user interaction.</p>
      <div className="demo-row">
        <Button isDisabled>Disabled</Button>
        <Button variant="bordered" isDisabled>
          Disabled Bordered
        </Button>
        <Button variant="light" isDisabled>
          Disabled Light
        </Button>
      </div>
    </section>
  );
}

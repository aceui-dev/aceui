import { Button } from "@aceuidev/button";

export default function DefaultSection() {
  return (
    <section className="demo-section">
      <h2>Button · Default</h2>
      <p>Default button with primary color and solid variant.</p>
      <div className="demo-row">
        <Button onClick={() => alert("Button clicked!")}>Click me</Button>
        <Button onClick={() => alert("Button clicked!")}>Another button</Button>
      </div>
    </section>
  );
}

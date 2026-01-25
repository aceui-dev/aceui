import { Button } from "@aceuidev/button";

export default function DefaultSection() {
  return (
    <section className="demo-section">
      <h2>Button · Default</h2>
      <div className="demo-row">
        <Button onPress={() => alert("Pressed!")}>Click me</Button>
        <Button onPress={() => alert("Pressed!")}>Another button</Button>
      </div>
    </section>
  );
}

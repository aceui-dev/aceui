import { Button } from "@aceuidev/button";

export default function CustomStylesSection() {
  return (
    <section className="demo-section">
      <h2>Button · Custom styles</h2>
      <div className="demo-row">
        <Button
          onPress={() => {}}
          style={{
            background: "#6366f1",
            color: "white",
            border: "none",
          }}
        >
          Primary
        </Button>
        <Button
          onPress={() => {}}
          style={{
            background: "transparent",
            color: "#a5b4fc",
            border: "1px solid #6366f1",
          }}
        >
          Secondary
        </Button>
      </div>
    </section>
  );
}

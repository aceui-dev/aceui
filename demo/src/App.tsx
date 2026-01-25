import { Button } from "@aceuidev/button";
import { Chip } from "@aceuidev/chip";
import { useState } from "react";

export default function App() {
  const [tags, setTags] = useState(["React", "TypeScript", "Vite"]);

  return (
    <div>
      <h1 style={{ marginTop: 0, marginBottom: "2rem", fontSize: "1.5rem" }}>
        AceUI · Button & Chip
      </h1>

      <section className="demo-section">
        <h2>Button · Default</h2>
        <div className="demo-row">
          <Button onPress={() => alert("Pressed!")}>Click me</Button>
          <Button onPress={() => alert("Pressed!")}>Another button</Button>
        </div>
      </section>

      <section className="demo-section">
        <h2>Button · Disabled</h2>
        <div className="demo-row">
          <Button isDisabled>Disabled</Button>
        </div>
      </section>

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

      <section className="demo-section">
        <h2>Chip · Variants</h2>
        <div className="demo-row">
          <Chip variant="filled">Filled</Chip>
          <Chip variant="outlined">Outlined</Chip>
          <Chip variant="soft">Soft</Chip>
        </div>
      </section>

      <section className="demo-section">
        <h2>Chip · Sizes</h2>
        <div className="demo-row">
          <Chip size="sm">Small</Chip>
          <Chip size="md">Medium</Chip>
          <Chip size="lg">Large</Chip>
        </div>
      </section>

      <section className="demo-section">
        <h2>Chip · Dismissible</h2>
        <div className="demo-row">
          {tags.map((tag) => (
            <Chip
              key={tag}
              variant="soft"
              onRemove={() => setTags((prev) => prev.filter((t) => t !== tag))}
            >
              {tag}
            </Chip>
          ))}
        </div>
      </section>
    </div>
  );
}

import { Chip } from "@aceuidev/chip";
import { useState } from "react";

export default function ChipPage() {
  const [tags, setTags] = useState(["React", "TypeScript", "Vite"]);

  return (
    <div>
      <h1 style={{ marginTop: 0, marginBottom: "2rem", fontSize: "1.5rem" }}>
        AceUI · Chip
      </h1>

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

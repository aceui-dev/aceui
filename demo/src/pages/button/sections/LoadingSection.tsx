import { useState } from "react";
import { Button } from "@aceuidev/button";

export default function LoadingSection() {
  const [saving, setSaving] = useState(false);
  const handleSave = () => {
    setSaving(true);
    setTimeout(() => setSaving(false), 2000);
  };

  return (
    <section className="demo-section">
      <h2 className="demo-title">Button · Loading</h2>
      <p>
        Use <code>isLoading</code> to show a spinner; the button is disabled while loading. Use <code>loadingText</code> to show custom text during loading (e.g. &quot;Saving...&quot;). Use <code>onClick</code> to run the action that sets loading (e.g. submit then set <code>isLoading</code> until the request finishes).
      </p>
      <div className="demo-row" style={{ flexWrap: "wrap", gap: "1rem" }}>
        <Button isLoading>Loading...</Button>
        <Button isLoading loadingText="Saving...">
          Save Changes
        </Button>
        <Button variant="bordered" isLoading loadingText="Submitting...">
          Submit
        </Button>
        <Button variant="light" color="success" isLoading>
          Success Loading
        </Button>
      </div>
      <h3 className="demo-subtitle">With onClick</h3>
      <p className="demo-caption">
        Click to simulate a 2s save; <code>onClick</code> sets loading, then clears it when done.
      </p>
      <div className="demo-row">
        <Button
          variant="solid"
          color="primary"
          isLoading={saving}
          loadingText="Saving..."
          onClick={handleSave}
        >
          Save
        </Button>
      </div>
    </section>
  );
}

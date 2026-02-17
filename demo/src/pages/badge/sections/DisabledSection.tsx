import { Badge } from "@aceuidev/badge";

export default function DisabledSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Badge · Disabled</h2>
      <p>Disabled badges use reduced opacity and aria-disabled.</p>
      <div className="demo-row">
        <Badge isDisabled>Disabled</Badge>
        <Badge isDisabled variant="solid" color="primary">Disabled Primary</Badge>
        <Badge isDisabled variant="bordered" color="success">Disabled Bordered</Badge>
      </div>
    </section>
  );
}

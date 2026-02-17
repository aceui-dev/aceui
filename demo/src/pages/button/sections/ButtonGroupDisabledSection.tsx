import { Button, ButtonGroup } from "@aceuidev/button";

export default function ButtonGroupDisabledSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Group Disabled</h2>
      <p>The <code>ButtonGroup</code> component also accepts the <code>isDisabled</code> prop to disable all buttons inside it.</p>
      <div className="demo-row">
        <ButtonGroup isDisabled>
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </div>
    </section>
  );
}

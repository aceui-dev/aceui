import { Button, ButtonGroup } from "@aceuidev/button";

export default function ButtonGroupSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Button Group</h2>
      <p>Group multiple buttons into a single visual unit. Buttons are seamlessly connected with shared borders and radius.</p>
      <h3>Bordered × Default</h3>
      <div className="demo-row">
        <ButtonGroup>
          <Button variant="bordered" color="default">One</Button>
          <Button variant="bordered" color="default">Two</Button>
          <Button variant="bordered" color="default">Three</Button>
        </ButtonGroup>
      </div>
      <h3 className="demo-subtitle">Default × Disabled</h3>
      <div className="demo-row">
        <ButtonGroup>
          <Button>One</Button>
          <Button>Two</Button>
          <Button isDisabled>Three</Button>
        </ButtonGroup>
      </div>
      <h3 className="demo-subtitle">Light × Secondary × Radius None</h3>
      <div className="demo-row">
        <ButtonGroup>
          <Button variant="light" radius="none" color="secondary">One</Button>
          <Button variant="light" radius="none" color="secondary">Two</Button>
          <Button variant="light" radius="none" color="secondary">Three</Button>
        </ButtonGroup>
      </div>
      <h3 className="demo-subtitle">Flat × Success × Radius Full</h3>
      <div className="demo-row">
        <ButtonGroup>
          <Button variant="flat" radius="full" color="success">One</Button>
          <Button variant="flat" radius="full" color="success">Two</Button>
          <Button variant="flat" radius="full" color="success">Three</Button>
        </ButtonGroup>
      </div>
      <h3 className="demo-subtitle">Shadow × Warning × Large</h3>
      <div className="demo-row">
        <ButtonGroup>
          <Button variant="shadow" size="large" color="warning">One</Button>
          <Button variant="shadow" size="large" color="warning">Two</Button>
          <Button variant="shadow" size="large" color="warning">Three</Button>
        </ButtonGroup>
      </div>
      <h3 className="demo-subtitle">Ghost × Danger × Small</h3>
      <div className="demo-row">
        <ButtonGroup>
          <Button variant="ghost" size="small" color="danger">One</Button>
          <Button variant="ghost" size="small" color="danger">Two</Button>
          <Button variant="ghost" size="small" color="danger">Three</Button>
        </ButtonGroup>
      </div>
    </section>
  );
}

import { Button } from "@aceuidev/button";

export default function LoadingSection() {
  return (
    <section className="demo-section">
      <h2>Button · Loading</h2>
      <p>Loading state with spinner animation. Button is disabled during loading.</p>
      <div className="demo-row">
        <Button isLoading>Loading...</Button>
        <Button isLoading loadingText="Saving...">
          Save Changes
        </Button>
        <Button variant="bordered" isLoading>
          Bordered Loading
        </Button>
        <Button variant="light" color="success" isLoading>
          Success Loading
        </Button>
      </div>
    </section>
  );
}

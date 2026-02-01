import { Button } from "@aceuidev/button";
import { useState } from "react";

export default function DefaultSection() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <section className="demo-section">
      <h2>Button · Default</h2>
      <p>Default button with primary color and solid variant.</p>
      <div className="demo-row">
        <Button onClick={() => console.log("Button clicked!")}>Click me</Button>
        <Button onClick={handleClick} isLoading={isLoading} loadingText="Submitting...">Submit</Button>
      </div>
    </section>
  );
}

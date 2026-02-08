import { Accordion, AccordionItem } from "@aceuidev/accordion";

export default function DefaultSection() {
  return (
    <section className="demo-section">
      <h2 className="demo-title">Accordion · Default</h2>
      <p>Basic accordion with light variant and single expansion mode.</p>
      <div className="demo-row">
        <div style={{ width: "100%", maxWidth: 400 }}>
          <Accordion>
            <AccordionItem itemKey="1" title="Accordion 1">
              Content for accordion 1. You can put any content here.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fugiat. Iure fugiat magni, quibusdam eaque quaerat incidunt necessitatibus aperiam nesciunt, quam delectus eligendi, voluptate aliquid voluptatibus dolore nihil. Corrupti, est.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fugiat. Iure fugiat magni, quibusdam eaque quaerat incidunt necessitatibus aperiam nesciunt, quam delectus eligendi, voluptate aliquid voluptatibus dolore nihil. Corrupti, est.
            </AccordionItem>
            <AccordionItem itemKey="2" title="Accordion 2">
              Content for accordion 2. Expand and collapse to see the animation.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fugiat. Iure fugiat magni, quibusdam eaque quaerat incidunt necessitatibus aperiam nesciunt, quam delectus eligendi, voluptate aliquid voluptatibus dolore nihil. Corrupti, est.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fugiat. Iure fugiat magni, quibusdam eaque quaerat incidunt necessitatibus aperiam nesciunt, quam delectus eligendi, voluptate aliquid voluptatibus dolore nihil. Corrupti, est.
            </AccordionItem>
            <AccordionItem itemKey="3" title="Accordion 3">
              Content for accordion 3.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fugiat. Iure fugiat magni, quibusdam eaque quaerat incidunt necessitatibus aperiam nesciunt, quam delectus eligendi, voluptate aliquid voluptatibus dolore nihil. Corrupti, est.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, fugiat. Iure fugiat magni, quibusdam eaque quaerat incidunt necessitatibus aperiam nesciunt, quam delectus eligendi, voluptate aliquid voluptatibus dolore nihil. Corrupti, est.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

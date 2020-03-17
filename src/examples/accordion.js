import React from "react"

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion"
import "@reach/accordion/styles.css"

export default function AccordionExample() {
  return (
    <Accordion>
      <AccordionItem>
        <AccordionButton>Step 1: Do a thing</AccordionButton>
        <AccordionPanel>
          <p>
            Here are some detailed instructions about doing a thing. I am very
            complex and probably contain a lot of content, so a user can hide or
            show me by clicking the button above.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Step 2: Do another thing</AccordionButton>
        <AccordionPanel>
          <p>
            Here are some detailed instructions about doing yet another thing.
            There are a lot of things someone might want to do, so I am only
            going to talk about doing that other thing. I'll let my fellow
            accordion items go into detail about even more things.
          </p>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Step 3: Do another another thing</AccordionButton>
        <AccordionPanel>
          <p>
            Here are some detailed instructions about doing yet another thing.
            There are a lot of things someone might want to do, so I am only
            going to talk about doing that other thing. I'll let my fellow
            accordion items go into detail about even more things.
          </p>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

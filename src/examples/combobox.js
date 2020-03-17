import React from "react"

import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox"
import "@reach/combobox/styles.css"

export default function ComboboxExample() {
  return (
    <div>
      <h4 id="demo">Basic, Fixed List Combobox</h4>
      <Combobox>
        <ComboboxInput aria-labelledby="demo" />
        <ComboboxPopover>
          <ComboboxList aria-labelledby="demo">
            <ComboboxOption value="Apple" />
            <ComboboxOption value="Banana" />
            <ComboboxOption value="Orange" />
            <ComboboxOption value="Pineapple" />
            <ComboboxOption value="Kiwi" />
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    </div>
  )
}

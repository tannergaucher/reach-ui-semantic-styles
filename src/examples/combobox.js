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
    <Combobox>
      <ComboboxInput
        className="input"
        aria-labelledby="demo"
        placeholder="Froogle"
      />
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
  )
}

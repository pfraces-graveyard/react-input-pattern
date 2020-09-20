import React, { useState } from "react";
import { eventValue, identity, filterWith } from "../util";

export const FilteredInput = ({ filter = identity }) => {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={eventValue(filterWith(filter)(setValue))}
      className="input"
    />
  );
};

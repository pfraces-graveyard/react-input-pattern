import React, { useState } from "react";
import { eventValue } from "../util";

export const TextInput = () => {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={eventValue(setValue)}
      className="input"
    />
  );
};

import React, { useState } from "react";
import { eventValue } from "../util";

const REGEX_ANY = /^.*$/;

const regexFilter = (regex) => (effect) => (x) => {
  if (!regex.test(x)) {
    return;
  }

  return effect(x);
};

export const PatternInput = ({ regex = REGEX_ANY }) => {
  const [value, setValue] = useState("");

  return (
    <input
      type="text"
      value={value}
      onChange={eventValue(regexFilter(regex)(setValue))}
      className="input"
    />
  );
};

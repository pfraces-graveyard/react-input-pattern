import React from "react";
import "./lab.css";

import { TextInput } from "./components/text-input";
import { FilteredInput } from "./components/filtered-input";
import { PatternInput } from "./components/pattern-input";
import { uppercase } from "./util";

const REGEX_UPPERCASE = /^[A-Z ]*$/;
const REGEX_INTEGER = /^(-?([1-9][0-9]*)?|0)$/;

export const Lab = () => {
  return (
    <div className="lab">
      <h1 className="title">Text Inputs</h1>

      <label>
        Text Input
        <TextInput />
      </label>

      <label>
        Filtered Input
        <FilteredInput />
      </label>

      <label>
        Filtered Input (Uppercase)
        <FilteredInput filter={uppercase} />
      </label>

      <label>
        Pattern Input
        <PatternInput />
      </label>

      <label>
        Pattern Input (Uppercase)
        <PatternInput regex={REGEX_UPPERCASE} />
      </label>

      <label>
        Pattern Input (Integer)
        <PatternInput regex={REGEX_INTEGER} />
      </label>
    </div>
  );
};

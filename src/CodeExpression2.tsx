import { FormGroup, TextArea } from "@blueprintjs/core";
import type { CodeExpressionConfig2 } from "./CodeExpression2.flyde";
import React, { useCallback } from "react";
import { getVariables } from "./getInlineVariables2";
import { MacroEditorComp } from "@flyde/core";

const CodeExpressionEditor2: MacroEditorComp<CodeExpressionConfig2> =
  function CodeExpressionEditor2(props) {
    const { value, onChange } = props;

    const changeValue = useCallback(
      (_val) => {
        onChange({ ...value, value: _val });
      },
      [value, onChange]
    );

    const vars = getVariables(value.value ?? "");

    return (
      <div>
        <FormGroup
          helperText={`Accepts any valid JS code that returns an expression`}
        >
          <TextArea
            value={value.value}
            fill
            onChange={(e) => changeValue(e.target.value)}
          />
        </FormGroup>
        <div>
          {vars.length > 0 ? (
            <small>
              External inputs exposed from this expression:{" "}
              <em>{vars.join(", ")}</em>
            </small>
          ) : (
            <small>
              Expose external inputs by using the "inputs" object. For example,
              "inputs.a + inputs.b" will expose 2 inputs, a and b, and sum them.
            </small>
          )}
        </div>
      </div>
    );
  };

export default CodeExpressionEditor2;

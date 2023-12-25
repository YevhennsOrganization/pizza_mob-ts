import React, { FC, forwardRef, HTMLProps, PropsWithRef } from "react";
import { Controller } from "react-hook-form";
import {
  Text,
  View,
  TextInput,
  KeyboardTypeOptions,
  TextInputProps,
} from "react-native";
import { inputCSS } from "./Input.styles";

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
  numberOfLines?: number;
  textArea?: boolean;
}

const Input: FC<PropsWithRef<Props>> = forwardRef(
  (
    {
      textArea = false,
      label,
      error,
      keyboardType = "default",
      numberOfLines = 1,
      // value,
      // onChange,
      ...props
    },
    ref
  ) => {
    return (
      <View style={inputCSS.fieldset}>
        <Text>{label}</Text>
        <TextInput
          numberOfLines={numberOfLines}
          keyboardType={keyboardType}
          style={[inputCSS.input, textArea && inputCSS.textArea]}
          // value={value}
          // onChange={onChange}
          //   autoComplete="true"
          //   ref={ref}
          //   {...props}
        />

        {error && (
          <View>
            <Text style={inputCSS.errorMessage}>{error}</Text>
          </View>
        )}
      </View>
    );
  }
);

Input.displayName = "Input";

export default Input;

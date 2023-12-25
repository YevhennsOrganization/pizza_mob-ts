import React, { FC, PropsWithRef } from "react";
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

const Input: FC<PropsWithRef<Props>> = ({
  textArea = false,
  label,
  error,
  keyboardType = "default",
  numberOfLines = 1,
  ...props
}) => {
  return (
    <View style={inputCSS.fieldset}>
      <Text>{label}</Text>
      <TextInput
        numberOfLines={numberOfLines}
        keyboardType={keyboardType}
        style={[inputCSS.input, textArea && inputCSS.textArea]}
        {...props}
      />

      {error && (
        <View>
          <Text style={inputCSS.errorMessage}>{error}</Text>
        </View>
      )}
    </View>
  );
};

Input.displayName = "Input";

export default Input;

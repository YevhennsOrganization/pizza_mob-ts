import React, { FC, forwardRef, HTMLProps, PropsWithRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardTypeOptions,
} from "react-native";

interface Props extends HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
  keyboardType?: KeyboardTypeOptions;
}

const Input: FC<PropsWithRef<Props>> = forwardRef(
  ({ label, error, keyboardType = "default", ...props }, ref) => {
    return (
      <View style={inputCSS.fieldset}>
        {/* <View> */}
        <Text>{label}</Text>
        {/* </View> */}
        <TextInput
          keyboardType={keyboardType}
          style={inputCSS.input}
          //   autoComplete="true"
          //   ref={ref}
          //   {...props}
        />
        {error && (
          <span style={inputCSS.errorMessage}>
            <Text>{error}</Text>
          </span>
        )}
      </View>
    );
  }
);

Input.displayName = "Input";

const inputCSS = StyleSheet.create({
  fieldset: {
    // font-family: var(--secondary-font);
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 5,
    borderColor: "#de612b",
    borderWidth: 1,
    // transition: var(--transition);
    // outline: none;
    // font-family: var(--main-font);
    // &:hover {
    //     box-shadow: var(--box-shadow);
    // }
  },
  errorMessage: {
    color: "red",
  },
});

export default Input;

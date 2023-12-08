import React, { FC, forwardRef, HTMLProps, PropsWithRef } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

interface Props extends HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input: FC<PropsWithRef<Props>> = forwardRef(
  ({ label, error, ...props }, ref) => {
    return (
      <View style={inputCSS.fieldset}>
        <View>{label}</View>
        <TextInput
          style={inputCSS.input}
          //   autoComplete="true"
          //   ref={ref}
          //   {...props}
        />
        {error && <span style={inputCSS.errorMessage}>{error}</span>}
      </View>
    );
  }
);

Input.displayName = "Input";

const inputCSS = StyleSheet.create({
  fieldset: {
    // font-family: var(--secondary-font);
    border: "none",
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  input: {
    width: "100%",
    padding: 12,
    borderRadius: 5,
    // transition: var(--transition);
    // border: 1px solid var(--accent-color);
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

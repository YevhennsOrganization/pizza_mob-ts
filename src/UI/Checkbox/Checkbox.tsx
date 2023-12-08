import React, { FC, forwardRef, HTMLProps, PropsWithRef } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

interface Props extends HTMLProps<HTMLInputElement> {
  label?: string;
}

const Checkbox: FC<PropsWithRef<Props>> = forwardRef(
  ({ label, ...props }, ref) => {
    return (
      <View style={CheckboxCSS.fieldset}>
        <TextInput />
        <View>{label}</View>
      </View>
    );
  }
);

Checkbox.displayName = "Checkbox";

const CheckboxCSS = StyleSheet.create({
  fieldset: {
    // font-family: var(--secondary-font);
    border: "none",
    display: "flex",
    alignItems: "center",
    gap: 16,
    position: "relative",
    height: 24,
    // input {
    //     cursor: pointer;
    //     appearance: none;
    //     background-color: var(--white-color);
    //     font: inherit;
    //     width: 24px;
    //     height: 24px;
    //     border: 1px solid var(--accent-color);
    //     border-radius: 2px;
    //     display: grid;
    //     place-content: center;
    //     transition: var(--transition);
    //     &:hover {
    //         box-shadow: var(--box-shadow);
    //     }
    // }

    // input::before {
    //     box-sizing: border-box;
    //     content: "";
    //     width: 14px;
    //     height: 14px;
    //     transform: scale(0);
    //     transition: var(--transition);
    //     box-shadow: inset 1em 1em var(--accent-color);
    // }

    // input:checked::before {
    //     transform: scale(1);
    // }
  },
});
export default Checkbox;

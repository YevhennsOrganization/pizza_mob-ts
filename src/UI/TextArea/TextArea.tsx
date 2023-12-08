import React, { FC, forwardRef, HTMLProps, PropsWithRef } from "react";
import { StyleSheet, TextInput } from "react-native";

interface Props extends HTMLProps<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextArea: FC<PropsWithRef<Props>> = forwardRef(
  ({ label, error, ...props }, ref) => {
    return (
      <fieldset style={TextAreaCSS.fieldset}>
        <label htmlFor={props.htmlFor}>{label}</label>
        <TextInput numberOfLines={5} />
        {error && <span style={TextAreaCSS.errorMessage}>{error}</span>}
      </fieldset>
    );
  }
);

TextArea.displayName = "TextArea";

const TextAreaCSS = StyleSheet.create({
  fieldset: {
    // font-family: var(--secondary-font);
    border: "none",
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  textarea: {
    width: "100%",
    padding: 12,
    borderRadius: 5,
    resize: "none",
    // transition: var(--transition);
    // border: 1px solid var(--accent-color);
    outline: "none",
    // font-family: var(--main-font);
    // &:hover {
    //     box-shadow: var(--box-shadow);
    // }
  },
  errorMessage: {
    color: "red",
  },
});

export default TextArea;

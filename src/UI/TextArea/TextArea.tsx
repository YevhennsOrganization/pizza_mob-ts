import React, { FC, forwardRef, HTMLProps, PropsWithRef } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface Props extends HTMLProps<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextArea: FC<PropsWithRef<Props>> = forwardRef(
  ({ label, error, ...props }, ref) => {
    return (
      <View style={TextAreaCSS.fieldset}>
        {/* <label htmlFor={props.htmlFor}> */}
        <Text>{label}</Text>
        {/* </label> */}
        <TextInput style={TextAreaCSS.textarea} numberOfLines={5} />
        {error && (
          <View>
            <Text style={TextAreaCSS.errorMessage}>{error}</Text>
          </View>
        )}
      </View>
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
    borderColor: "#de612b",
    borderWidth: 1,
    // resize: "none",
    textAlignVertical: "top",
    // transition: var(--transition);
    // border: 1px solid var(--accent-color);
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

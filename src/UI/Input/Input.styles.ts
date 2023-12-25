import { StyleSheet } from "react-native";

export const inputCSS = StyleSheet.create({
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
  textArea: {
    textAlignVertical: "top",
  },
  errorMessage: {
    color: "red",
  },
});

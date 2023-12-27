import { StyleSheet } from "react-native";

export const FinalModalCSS = StyleSheet.create({
  modalWrapper: {
    //   background: rgba($color: #3d3838, $alpha: 0.7),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 50,
    overflow: "scroll",
  },
  modal: {
    // backgroundColor: var(--white-color),
    // color: var(--black-color),
    // font-family: var(--secondary-font),
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  resultText: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
});

import { StyleSheet } from "react-native";

export const ProductDescriptionCSS = StyleSheet.create({
  descriprionWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    // h2 {
    //     font-family: var(--main-font);
    //     font-size: 18px;
    // }
    // p {
    //     font-family: var(--secondary-font);
    //     color: var(--secondary-text-color);
    // }
  },
  img: {
    marginLeft: "auto",
    marginRight: "auto",
  },
});

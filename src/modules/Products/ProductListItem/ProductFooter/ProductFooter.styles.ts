import { StyleSheet } from "react-native";

export const ProductFooterCSS = StyleSheet.create({
  productFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  price: {
    // font-family: var(--main-font);
    fontSize: 18,
    // color: var(--black-color);
    fontWeight: "700",
  },
  priceWrapper: {
    flexDirection: "column",
  },
  promPrice: {
    // font-family: var(--main-font);
    fontSize: 18,
    color: "#de612b",
    // color: var(--accent-color);
    fontWeight: "700",
  },
  oldPrice: {
    // font-family: var(--main-font);
    fontSize: 16,
    // color: var(--black-color);
    fontWeight: "700",
    textDecorationLine: "line-through",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

import { StyleSheet } from "react-native";

export const ProductListItemCSS = StyleSheet.create({
  listItem: {
    backgroundColor: "#fff",
    color: "black",
    padding: 24,
    borderRadius: 10,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  promotion: {
    position: "absolute",
    top: 24,
    left: 24,
    backgroundColor: "#de612b",
    // background-color: var(--accent-color);
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    // color: var(--white-color);
    // font-family: var(--main-font);
  },
  favorite: {
    position: "absolute",
    right: 24,
    top: 24,
  },
});

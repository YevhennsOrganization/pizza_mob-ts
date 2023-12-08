import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = {
  onPress: () => void;
  disabled?: boolean;
} & TouchableOpacityProps;

const RoundButton = ({
  children,
  onPress,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={roundButtonCSS.button}
      onPress={onPress}
      {...props}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  );
};

const roundButtonCSS = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    borderRadius: 16,
    border: "none",
    // color: var(--accent-color);
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default RoundButton;

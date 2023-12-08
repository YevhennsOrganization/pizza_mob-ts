import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type ButtonProps = {
  onPress?: () => void;
  disabled?: boolean;
} & TouchableOpacityProps;

const Button = ({
  disabled = false,
  children,
  onPress,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={buttonCSS.button}
      onPress={onPress}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};

const buttonCSS = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    //   color: var(--white-color);
    borderRadius: 12,
    //   background: linear-gradient(95deg, #f94c25 4.78%, #ffd465 112.49%);
    border: "none",
    //   transition: var(--transition);
    fontSize: 18,
    //   font-family: var(--main-font),
    //   &:hover:not(:disabled) {
    //     background: linear-gradient(276deg, #eb3535 -3.09%, #ffd163 95.38%);
    //     box-shadow: var(--box-shadow);
    //   }
    //   &:active:not(:disabled) {
    //     background: #ffd163;
    //     box-shadow:
    //       2px 2px 4px 0px rgba(0, 0, 0, 0.25) inset,
    //       -2px -2px 4px 0px rgba(0, 0, 0, 0.25) inset;
    //   }
    //   &:disabled {
    //     background: linear-gradient(276deg, #eb3535 -3.09%, #ffd163 95.38%);
    //   }
  },
});

export default Button;

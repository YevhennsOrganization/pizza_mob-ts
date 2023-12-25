import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { buttonCSS } from "./Button.styles";

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

export default Button;

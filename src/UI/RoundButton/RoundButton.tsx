import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { roundButtonCSS } from "./RoundButton.styles";

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

export default RoundButton;

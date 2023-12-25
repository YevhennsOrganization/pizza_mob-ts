import React, { FC, HTMLProps } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addInfo, getOrderSum } from "../../../redux/cart/cartSlice";
import { sendOrder } from "../../../redux/cart/cartOperations";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
// import Checkbox from "../../../UI/Checkbox/Checkbox";
import { Text, View } from "react-native";
import { Formik } from "formik";
import { cartFormCSS } from "./CartForm.styles";

interface Props extends HTMLProps<HTMLFormElement> {
  openModal: () => void;
  order: TOrdered;
}

const CartForm: FC<Props> = ({ openModal, order }) => {
  const orderSum = useAppSelector(getOrderSum);
  const dispatch = useAppDispatch();

  const onSubmit1 = (data) => {
    openModal();
    const customerInfo: TInfo = {
      address: data.address,
      comment: data.comment,
      delivery: data.delivery,
      name: data.name,
      number: data.number,
    };
    dispatch(addInfo(customerInfo));
    const reqBody: TSummaryOrder = { customerInfo, order, orderSum };
    dispatch(sendOrder(reqBody));
  };

  return (
    <View style={cartFormCSS.form}>
      <Formik
        initialValues={{ name: "", number: "", address: "", comment: "" }}
        onSubmit={(values) => onSubmit1(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <Input
              placeholder="Введіть ім'я"
              inputMode="text"
              value={values.name}
              onChangeText={handleChange("name")}
              label="Ім'я"
              onBlur={handleBlur("name")}
            />

            <Input
              keyboardType="phone-pad"
              // pattern="[0-9]{10}"
              label="Номер телефону в форматі: 0991115533"
              placeholder="Введіть номер телефону"
              value={values.number}
              onChangeText={handleChange("number")}
              onBlur={handleBlur("number")}
            />

            <Input
              label="Введіть адресу"
              placeholder="Введіть адресу"
              value={values.address}
              onChangeText={handleChange("address")}
              onBlur={handleBlur("address")}
            />

            <Input
              placeholder="Введіть коментар"
              label="Коментар"
              numberOfLines={5}
              value={values.comment}
              onChangeText={handleChange("comment")}
              onBlur={handleBlur("comment")}
              textArea
            />

            <Button onPress={handleSubmit}>
              <Text>Підтвердити</Text>
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
};

export default CartForm;

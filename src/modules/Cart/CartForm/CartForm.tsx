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

  const submit = (data: TInfo) => {
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
        initialValues={{
          name: "",
          number: "",
          delivery: false,
          address: "",
          comment: "",
        }}
        onSubmit={(values) => submit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <>
            <Input
              label="Ім'я"
              placeholder="Введіть ім'я"
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
            />

            <Input
              label="Номер телефону в форматі: 0991115533"
              placeholder="Введіть номер телефону"
              value={values.number}
              onChangeText={handleChange("number")}
              onBlur={handleBlur("number")}
              keyboardType="phone-pad"
            />

            <Input
              label="Адреса"
              placeholder="Введіть адресу"
              value={values.address}
              onChangeText={handleChange("address")}
              onBlur={handleBlur("address")}
            />

            <Input
              label="Коментар"
              placeholder="Введіть коментар"
              value={values.comment}
              onChangeText={handleChange("comment")}
              onBlur={handleBlur("comment")}
              numberOfLines={5}
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

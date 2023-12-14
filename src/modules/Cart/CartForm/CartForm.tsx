import React, { FC, HTMLProps } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { addInfo, getOrderSum } from "../../../redux/cart/cartSlice";
import { sendOrder } from "../../../redux/cart/cartOperations";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";
// import Checkbox from "../../../UI/Checkbox/Checkbox";
import { StyleSheet, Text, View } from "react-native";

interface Props extends HTMLProps<HTMLFormElement> {
  openModal: () => void;
  order: TOrdered;
}

const CartForm: FC<Props> = ({ openModal, order }) => {
  const {
    control,
    reset,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TInfo>({ mode: "onChange" });

  const orderSum = useAppSelector(getOrderSum);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<TInfo> = (data) => {
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

  const delivery = watch("delivery");

  return (
    <View style={cartFormCSS.form}>
      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            // {...register("name", { required: "Це обов'язкове поле!" })}
            placeholder="Введіть ім'я"
            error={errors?.name?.message}
            inputMode="text"
            value={value}
            onChangeText={onChange}
            label="Ім'я"
          />
        )}
        name="name"
      />
      <Controller
        control={control}
        render={({ field: { value, onChange } }) => (
          <Input
            // control={control}
            // name="number"
            // {...register("number", {
            //   required: "Це обов'язкове поле!",
            //   minLength: 10,
            //   maxLength: {
            //     value: 10,
            //     message: "Забагато цифр",
            //   },
            // })}
            keyboardType="phone-pad"
            // pattern="[0-9]{10}"
            label="Номер телефону в форматі: 0991115533"
            error={errors?.number?.message}
            value={value}
            onChangeText={onChange}
          />
        )}
        name="number"
      />

      {/* <Checkbox
        {...register("delivery")}
        id="delivery"
        htmlFor="delivery"
        label="Доставка"
      /> */}
      {delivery && (
        <Controller
          control={control}
          render={() => (
            <Input
              {...register("address", { required: "Це обов'язкове поле!" })}
              label="Введіть адресу"
              placeholder="Введіть адресу"
              error={errors?.address?.message}
            />
          )}
          name="address"
        />
      )}
      <Controller
        control={control}
        render={() => (
          <Input
            {...register("comment")}
            id="comment"
            placeholder="Введіть коментар"
            label="Коментар"
            numberOfLines={5}
          />
        )}
        name="comment"
      />

      <Button onPress={handleSubmit(onSubmit)}>
        <Text>Підтвердити</Text>
      </Button>
    </View>
  );
};

const cartFormCSS = StyleSheet.create({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    width: "100%",
  },
});
export default CartForm;

/* eslint-disable react/no-unescaped-entities */
import React, { FC } from "react";
import Button from "../../UI/Button/Button";
// import LoaderModal from "../../UI/common/LoaderModal/LoaderModal";
import Error500 from "../errors/Error500/Error500";
import { Text, View } from "react-native";
import Loader from "../../UI/Loader/Loader";
import { FinalModalCSS } from "./FinalModal.styles";

interface Props {
  finalAction: () => void;
  filledCart: TCart;
  sum: number;
  isLoading: boolean;
  err: any;
}

const FinalModal: FC<Props> = ({
  finalAction,
  filledCart,
  sum,
  isLoading,
  err,
}) => {
  if (err) {
    return <Error500 />;
  }

  return (
    <View style={FinalModalCSS.modalWrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <View style={FinalModalCSS.modal}>
          <View style={FinalModalCSS.resultText}>
            <Text>Дякуємо!</Text>
            <Text>Ваше замовлення прийняте,</Text>
            <Text>очікуйте дзвінок від менеджера</Text>
            <Text>Інформація про замовлення:</Text>
          </View>
          <View>
            {filledCart.map(({ _id, title, quantity, totalPrice }) => {
              return (
                <View key={_id}>
                  <Text>
                    {title} - {quantity} шт. - {totalPrice} грн.
                  </Text>
                </View>
              );
            })}
          </View>
          <View>
            <Text>Загальна сума: {sum} грн.</Text>
          </View>
          <Button onPress={finalAction}>
            <Text style={FinalModalCSS.buttonText}>Вийти</Text>
          </Button>
        </View>
      )}
    </View>
  );
};

export default FinalModal;

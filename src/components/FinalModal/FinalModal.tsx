/* eslint-disable react/no-unescaped-entities */
import React, { FC } from "react";
import Button from "../../UI/Button/Button";
// import LoaderModal from "../../UI/common/LoaderModal/LoaderModal";
import Error500 from "../errors/Error500/Error500";
import { StyleSheet, Text, View, Image } from "react-native";

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
        <Text>asdasd</Text>
      ) : (
        // <LoaderModal />
        <View style={FinalModalCSS.modal}>
          <>
            <Text style={FinalModalCSS.resultText}>Дякуємо!</Text>
            <Text>Ваше замовлення прийняте,</Text>
            <Text>очікуйте дзвінок від менеджера</Text>
            <Text>Інформація про замовлення</Text>
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
              <Text>Вийти</Text>
            </Button>
          </>
        </View>
      )}
    </View>
  );
};

const FinalModalCSS = StyleSheet.create({
  modalWrapper: {
    // position: "fixed",
    //   boxSizing: 'border-box',
    //   zIndex: 9,
    //   left: 0,
    //   top: 0,
    //   width: 100vw,
    //   height: 100vh,
    //   background: rgba($color: #3d3838, $alpha: 0.7),
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 50,
    paddingVertical: 0,
    overflow: "scroll",
  },
  modal: {
    // backgroundColor: var(--white-color),
    // color: var(--black-color),
    padding: 20,
    borderRadius: 20,
    // font-family: var(--secondary-font),
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  resultText: {
    textAlign: "center",
  },
  quantitySet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  closeBtn: {
    position: "absolute",
    top: 20,
    right: 20,
    width: 20,
    height: 20,
  },
});

export default FinalModal;

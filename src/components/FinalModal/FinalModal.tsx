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
    <div style={FinalModalCSS.modalWrapper}>
      {isLoading ? (
        <LoaderModal />
      ) : (
        <div style={FinalModalCSS.modal}>
          <>
            <p style={FinalModalCSS.resultText}>
              Дякуємо!
              <br />
              Ваше замовлення прийняте,
              <br />
              очікуйте дзвінок від менеджера
            </p>
            <p>Інформація про замовлення</p>
            <ul>
              {filledCart.map(({ _id, title, quantity, totalPrice }) => {
                return (
                  <li key={_id}>
                    <p>
                      {title} - {quantity} шт. - {totalPrice} грн.
                    </p>
                  </li>
                );
              })}
            </ul>
            <p>Загальна сума: {sum} грн.</p>
            <Button onPress={finalAction}>Вийти</Button>
          </>
        </div>
      )}
    </div>
  );
};

const FinalModalCSS = StyleSheet.create({
  modalWrapper: {
    position: "fixed",
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

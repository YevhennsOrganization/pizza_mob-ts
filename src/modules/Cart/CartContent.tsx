import React from "react";
import Empty from "../../components/Empty/Empty";
import CartForm from "./CartForm/CartForm";
import CartList from "./CartList/CartList";

interface Props {
  filledCart: TCart;
  deleteCartItem: (id: string) => void;
  deleteAllProducts: () => void;
  openModal: () => void;
}

const CartContent = ({
  filledCart,
  deleteCartItem,
  deleteAllProducts,
  openModal,
}: Props) => {
  const order: TOrdered = filledCart.map((item) => {
    return {
      title: item.title,
      quantity: item.quantity,
    };
  });

  return (
    <>
      {filledCart.length > 0 ? (
        <>
          <CartList
            filledCart={filledCart}
            deleteCartItem={deleteCartItem}
            deleteAllProducts={deleteAllProducts}
          />
          <CartForm openModal={openModal} order={order} />
        </>
      ) : (
        <Empty text={"Кошик порожній!"} />
      )}
    </>
  );
};

export default CartContent;

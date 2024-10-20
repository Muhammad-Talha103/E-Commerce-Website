import React from "react";
import Wrapper from "@/shared/Wrapper";
import CartItems from "./CartItem";
import CartTotal from "./CartTotal";

const Cart = () => {
  return (
    <Wrapper>
      <h2 className="text-2xl font-bold mb-2 px-4">Cart</h2>
      <div>
        <CartItems />
        <CartTotal />
      </div>
    </Wrapper>
  );
};

export default Cart;
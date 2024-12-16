"use client";

import React from "react";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/store/slices/cart-slice";

const AddToCartButton = ({ productItem }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(productItem));
  };

  const handlRemoveFromCart = () => {
    dispatch(removeFromCart(productItem?.id));
  };

  return (
    <div className="mt-8 max-w-md">
      <Button
        type="button"
        onClick={
          cart?.cartItems.some((item) => item.id === productItem.id)
            ? handlRemoveFromCart
            : handleAddToCart
        }
      >
        {cart?.cartItems.some((item) => item.id === productItem.id)
          ? "Remove from Cart"
          : "Add To Cart"}
      </Button>
    </div>
  );
};

export default AddToCartButton;

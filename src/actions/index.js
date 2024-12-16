"use server";

import { signIn, signOut } from "@/auth";

// GET ALL PRODUCTS

export const fetchAllProductsAction = async () => {
  try {
    const apiResponse = await fetch("https://dummyjson.com/products", {
      method: "GET",
      cache: "no-store",
    });

    const data = await apiResponse.json();

    return {
      success: true,
      data: data.products,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Something went wrong! Please try again.",
    };
  }
};

export const fetchProductDetailsAction = async (currentProductID) => {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/products/${currentProductID}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await apiResponse.json();

    return {
      success: true,
      data: data,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Something went wrong! Please try again.",
    };
  }
};

export const LoginAction = async () => {
  await signIn("github");
};

export const LogOutAction = async () => {
  await signOut();
};

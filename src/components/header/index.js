"use client";

import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { LoginAction, LogOutAction } from "@/actions";

const Header = ({ getSession }) => {
  const handleOauthSignIn = async () => {
    await LoginAction();
  };

  const handleOauthSignOut = async () => {
    await LogOutAction();
  };

  return (
    <header className="flex shadow-md py-4 px-4 bg-white min-h-[70px] tracking-wide relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-5 w-full">
        <Link className="text-xl font-bold" href={"/"}>
          Shopping Cart
        </Link>
      </div>
      <ul className="flex gap-6 items-center justify-center mr-10">
        <li className="text-lg font-semibold">
          <Link href={"/"}>Products</Link>
        </li>
        <li className="text-lg font-semibold">
          <Link href={"/cart "}>Cart</Link>
        </li>
      </ul>
      <div className="flex space-x-3 ">
        <form
          action={getSession !== null ? handleOauthSignOut : handleOauthSignIn}
        >
          <div className="flex justify-between gap-5 items-center">
            {getSession !== null && (
              <img
                src={getSession.user.image}
                className="h-10 w-10 object-contain rounded-full cursor-pointer shadow-sm hover:shadow-black "
              />
            )}
            <Button type="submit">
              {getSession !== null ? "Log Out" : "Login"}
            </Button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
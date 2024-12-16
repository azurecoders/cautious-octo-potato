import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const UnAuthPage = async () => {
  const getSession = await auth();

  if (getSession !== null) redirect("/");
  return (
    <div className="p-10">
      <h2 className="text-6xl font-extrabold">
        You are not logged in. Please login
      </h2>
    </div>
  );
};

export default UnAuthPage;

"use client";

import Header from "@/components/header";
import store from "@/store";
import { Provider } from "react-redux";

const ReduxProvider = ({ children, getSession }) => {
  return (
    <Provider store={store}>
      <Header getSession={getSession} />
      {children}
    </Provider>
  );
};

export default ReduxProvider;

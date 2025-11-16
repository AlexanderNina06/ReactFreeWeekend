/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router";

const Providers = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
const customRender = (ui, options) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

import { render, screen } from "@testing-library/react";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

test("Main page is opened", () => {
  render(
    <RouterProvider router={createBrowserRouter([
      {
        path: "/",
        element: <App />,
      },
    ])} /> 
  );
  const Main = screen.getByText(/Main/i);
  expect(Main).toBeInTheDocument();
});


import App from "./App/App";
import Example from "./Example/Example";
import Main from "./Main/Main";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      loader: (req) => {
        console.log(req);
        return { data: "some test data" };
      },
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "main",
          element: <Main />,
        },
        {
          path: "example",
          element: <Example />,
        },
        {
          path: "example/:id",
          element: <Example />,
        },
      ],
    },
    {
      path: "*",
      element: <h1>Nothing is here!</h1>,
    },
  ]);

  export default router;
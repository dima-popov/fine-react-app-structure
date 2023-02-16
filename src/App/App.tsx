import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function App() {
  const data = useLoaderData();

  console.log(data);

  return (
    <div className="App">
      <header>
        <NavBar />

        <h1 style={{ textAlign: "center" }}>Fine React app</h1>
      </header>

      <Outlet />
    </div>
  );
}

export default App;

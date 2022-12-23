import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootElement from "./components/RootElement";
import { UrlContextProvider } from "./context/UrlContext";
import AddUrl from "./pages/AddUrl";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/add-url",
        element: <AddUrl />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <UrlContextProvider>
        <RouterProvider router={router} />
      </UrlContextProvider>
    </div>
  );
}

export default App;

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";

//layouts
import RootLayout from "./layouts/RootLayout";

//pages
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

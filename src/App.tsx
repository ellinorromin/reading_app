import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./views/homepage/HomePage";
import ListPage from "./views/listpage/ListPage";
import BookPage from "./views/bookpage/BookPage";
import AddBookPage from "./views/addbookpage/AddBookPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/list",
      element: <ListPage />,
    },
    {
      path: "/book",
      element: <BookPage />,
    },
    {
      path: "/add",
      element: <AddBookPage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

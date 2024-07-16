import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from '@mantine/core';
import App from "@/components/app/App.tsx";
import SingleCharacter from "@/components/singleCharacter/SingleCharacter.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "character/:characterId",
        element: <SingleCharacter />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
  </React.StrictMode>,
)

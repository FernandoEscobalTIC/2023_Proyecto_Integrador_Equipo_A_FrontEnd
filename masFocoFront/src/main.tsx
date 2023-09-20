import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './App';
import './index.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    }
  ])
  // @ts-ignore
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
  );

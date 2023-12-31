import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./Shera/Router/Router";
import AuthProvider from "./Shera/Auth/AuthProvider";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={routers} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

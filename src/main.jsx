import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from "react-router-dom";

import { router } from './Router/Routes';
import ProviderContext from './Provider/ProviderContext';

import {
  QueryClient,
  QueryClientProvider,
 
} from "@tanstack/react-query";


const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ProviderContext>
        <RouterProvider router={router}></RouterProvider>
      </ProviderContext>
    </QueryClientProvider>
  </React.StrictMode>
);

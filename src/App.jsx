import React, { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Router from "./router/Router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "./components/layout/Layout";
import UserContextProvider from "./context/UserContextProvider";
import ScrollToTop from "./components/modules/ScrollToTop";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        gcTime: 1 * 24 * 60 * 60 * 1000,
        retry: 1,
      },
    },
  });

  const [isOpen, setIsOpen] = useState(false);


  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Layout isOpen={isOpen} setIsOpen={setIsOpen}>
          <ScrollToTop />
          <Router isOpen={isOpen} setIsOpen={setIsOpen} />
          <Toaster />
        </Layout>
      </UserContextProvider>
    </QueryClientProvider>
  );
}

export default App;

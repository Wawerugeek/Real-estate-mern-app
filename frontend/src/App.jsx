import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Website from "./Pages/Website";
import { Suspense } from "react";
import Layout from "./components/Layout/Layout";
import Properties from "./Pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
       <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Website />} />
            <Route path="/properties" element={<Properties />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
    </QueryClientProvider>

  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Website from "./Pages/Website";
import { Suspense, useState } from "react";
import Layout from "./components/Layout/Layout";
import Properties from "./Pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./Pages/Property/Property";
import UserDetailContext from "./Context/userDetailsContext";

function App() {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null

  })

  return (
    <UserDetailContext.Provider value={{userDetails, setUserDetails}}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Website />} />
              {/* make children path for the properties page */}
              <Route path="/properties">
                <Route index element={<Properties />} />
                <Route path=":propertyId" element={<Property />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;

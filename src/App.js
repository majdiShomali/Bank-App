import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/home";
import SignUp from "./pages/SignUp";
import NoPage from "./pages/NoPage";
import Footer from "./pages/footer";

export default function App() {


  const initState = {
    accounts : [
            {
              id: 1,
              customerName:"Israa Othman",
              accountNumber: "123456",
              accountType: "Savings"
            },
            {
              id: 2,
              customerName:"Ahmad Zahran",
              accountNumber: "987654",
              accountType: "Student accounts"
            }
    ]


}



  
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
       
          <Route index element={<Home initState5={initState}  />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
       
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}



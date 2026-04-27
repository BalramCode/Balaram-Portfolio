import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import { Toaster } from "sonner";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(22,27,34,0.85)",
            border: "1px solid rgba(0,210,255,0.25)",
            color: "#e6edf3",
            backdropFilter: "blur(14px)",
          },
        }}
      />
    </div>
  );
}

export default App;

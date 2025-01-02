import React from "react";
import AnimatedGridPattern from "./Components/ui/animated-grid-pattern";
import { cn } from "./lib/utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { Home } from "./Pages/Home";
import { Toaster } from "sonner";

export const App = () => {
  return (
    <div className="overflow-x-hidden">
      {/* <AnimatedGridPattern
        numSquares={30}
        maxOpacity={2}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[100%] skew-y-12"
        )}
      /> */}
      <BrowserRouter>
        <Toaster />
        <Routes>  
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

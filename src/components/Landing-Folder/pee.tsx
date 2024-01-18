import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/utils/cn";
import { useNavigate } from 'react-router-dom';

export function BackgroundBoxesDemo() {
  let navigate = useNavigate();

  const handleNewProcess = () => {
    navigate("/HomePage"); // This will navigate to the HomePage component
  };

  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className="md:text-4xl text-xl text-white relative z-20">
        Site developed by @emilyzh2018 on github
      </h1>
      <button className='lets-go' onClick={handleNewProcess}>Let's Go</button>
    </div>
  );
}

"use client";
import { useState } from "react";
import { Header } from "@/components/layout/Header";

import MapPanel from "./components/MapPanel";
import QraStepper from "./components/QRAStepper";
import StepProgressBar from "./components/StepProgressBar";

// import ThreatDetection from "./components/ThreatDetection";

export default function QRA() {
  const steps = [
    "CO-ORDINATE RESPONSE",
    "SCRAMBLE",
    "INTERCEPT",
    "RETURN TO BASE",
  ];
  const [currentStepIndex, setCurrentStepIndex] = useState(0); // Manage current step

  // Example function to advance step (you'd integrate this with your QraStepper logic)
  const goToNextStep = () => {
    setCurrentStepIndex((prevIndex) => (prevIndex + 1) % steps.length);
  };

  return (
    <div className="min-h-screen flex flex-col text-white overflow-hidden relative bg-gray">
      <Header />

      <main
        className="flex-1 relative flex flex-col pt-25 z-2"
        aria-label="QRA Interface"
      >
        <div className="flex flex-row flex-1 h-full">
          {/* Persitent left panel */}
          <div className="w-1/2 h-full">
            <MapPanel currentStepIndex={currentStepIndex} />
          </div>

          {/* Dynamic right panel */}
          <div className="w-1/2 h-full">
            <QraStepper
              currentStep={currentStepIndex} // Pass the state
              onAdvance={goToNextStep} // Pass the update function
            />
          </div>
        </div>

        
      </main>

      {/* Conditional Rendering using && */}
      {/* {currentStepIndex === 0 && (
        <div className="absolute h-screen w-screen z-0">
          <ThreatDetection />
        </div>
      )} */}

      {/* Step Progress Bar */}

      <div className="w-full absolute bottom-0 left-0 py-6 z-3">
        <StepProgressBar
          steps={steps}
          currentStepIndex={currentStepIndex}
          className="w-4/5"
        />
      </div>
    </div>
  );
}

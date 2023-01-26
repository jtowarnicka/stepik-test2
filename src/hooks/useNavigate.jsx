import { useState, useEffect } from "react";

export const useNavigate = (min, max) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight" && currentStep < max) {
        nextStep();
      } else if (event.key === "ArrowLeft" && currentStep > min) {
        prevStep();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStep]);

  return { currentStep, nextStep, prevStep };
};

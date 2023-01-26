import { useState, useEffect, useCallback } from "react";

export const useNavigate = (min, max) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = useCallback(
    () => setCurrentStep(currentStep + 1),
    [currentStep]
  );
  const prevStep = useCallback(
    () => setCurrentStep(currentStep - 1),
    [currentStep]
  );

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
  }, [currentStep, max, min, nextStep, prevStep]);

  return { currentStep, nextStep, prevStep };
};

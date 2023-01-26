import React from "react";
import { useNavigate } from "./hooks/useNavigate";
import pics from "./data/pics";
import "./style.css";

export default function App() {
  const { currentStep, nextStep, prevStep } = useNavigate(0, 12);
  const look = pics.find((l) => l.id === currentStep);
  return (
    <div>
      <h1>MIU MIU</h1>
      <h2>Spring collection</h2>
      <h3>
        look
        {currentStep}
      </h3>
      <div>
        <img src={look?.url} alt="look" />
      </div>
      <div className="move">
        {look?.id > 0 ? (
          <button
            className="btn btn-outline-dark"
            onClick={prevStep}
            type="button"
          >
            Wstecz
          </button>
        ) : null}
        {look?.id < pics.length - 1 ? (
          <button
            className="btn btn-outline-dark"
            onClick={nextStep}
            type="button"
          >
            Dalej
          </button>
        ) : null}
      </div>
    </div>
  );
}

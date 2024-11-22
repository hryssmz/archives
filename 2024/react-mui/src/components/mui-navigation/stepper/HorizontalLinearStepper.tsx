// components/mui-navigation/stepper/HorizontalLinearStepper.tsx
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    if (isStepSkipped(activeStep)) {
      setSkipped(prevSkipped => {
        const newSkipped = new Set(prevSkipped.values());
        newSkipped.delete(activeStep);
        return newSkipped;
      });
    }
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step
            key={label}
            completed={isStepSkipped(index) ? false : undefined}
          >
            <StepLabel
              optional={
                isStepOptional(index) ? (
                  <Typography variant="caption">Optional</Typography>
                ) : undefined
              }
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <>
        <Typography sx={{ mt: 2, mb: 1 }}>
          {activeStep === steps.length ? (
            <>All steps completed - you&apos;re finished</>
          ) : (
            <>Step {activeStep + 1}</>
          )}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          {activeStep === steps.length ? (
            <>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </>
          ) : (
            <>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </>
          )}
        </Box>
      </>
    </Box>
  );
}

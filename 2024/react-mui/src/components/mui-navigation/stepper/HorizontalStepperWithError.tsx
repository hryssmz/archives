// components/mui-navigation/stepper/HorizontalStepperWithError.tsx
import Box from "@mui/material/Box";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

export default function HorizontalStepperWithError() {
  const isStepFailed = (step: number) => {
    return step === 1;
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={1}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel
              optional={
                isStepFailed(index) && (
                  <Typography variant="caption" color="error">
                    Alert message
                  </Typography>
                )
              }
              error={isStepFailed(index)}
            >
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

// components/mui-inputs/slider/DiscreteSliderSteps.tsx
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function DiscreteSliderSteps() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Small steps"
        defaultValue={0.00000005}
        getAriaValueText={value => `${value}°C`}
        step={0.00000001}
        marks
        min={-0.00000005}
        max={0.0000001}
        valueLabelDisplay="auto"
      />
    </Box>
  );
}

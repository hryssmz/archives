// components/mui-inputs/slider/DiscreteSlider.tsx
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function DiscreteSlider() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={value => `${value}°C`}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
      <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
    </Box>
  );
}

// components/mui-inputs/slider/DiscreteSliderLabel.tsx
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [0, 20, 37, 100].map(value => ({ value, label: `${value}°C` }));

export default function DiscreteSliderLabel() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Always visible"
        defaultValue={80}
        getAriaValueText={value => `${value}°C`}
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
    </Box>
  );
}

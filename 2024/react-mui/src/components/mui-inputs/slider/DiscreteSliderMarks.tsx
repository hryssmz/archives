// components/mui-inputs/slider/DiscreteSliderMarks.tsx
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [0, 20, 37, 100].map(value => ({ value, label: `${value}°C` }));

export default function DiscreteSliderMarks() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Custom marks"
        defaultValue={20}
        getAriaValueText={value => `${value}°C`}
        step={10}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}

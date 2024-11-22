// components/mui-inputs/slider/DiscreteSliderValues.tsx
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [0, 20, 37, 100].map(value => ({ value, label: `${value}°C` }));

export default function DiscreteSliderValues() {
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Restricted values"
        defaultValue={20}
        valueLabelFormat={value =>
          marks.findIndex(mark => mark.value === value) + 1
        }
        getAriaValueText={value => `${value}°C`}
        step={null}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  );
}

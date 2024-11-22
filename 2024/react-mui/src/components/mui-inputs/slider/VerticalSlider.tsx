// components/mui-inputs/slider/VerticalSlider.tsx
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";

const marks = [0, 20, 37, 100].map(value => ({ value, label: `${value}°C` }));

export default function VerticalSlider() {
  const valueText = (value: number) => `${value}°C`;

  return (
    <Stack sx={{ height: 300 }} spacing={1} direction="row">
      <Slider
        aria-label="Temperature"
        orientation="vertical"
        getAriaValueText={valueText}
        valueLabelDisplay="auto"
        defaultValue={30}
      />
      <Slider
        aria-label="Temperature"
        orientation="vertical"
        defaultValue={30}
        valueLabelDisplay="auto"
        disabled
      />
      <Slider
        getAriaLabel={() => "Temperature"}
        orientation="vertical"
        getAriaValueText={valueText}
        defaultValue={[20, 37]}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Stack>
  );
}

// components/mui-inputs/slider/RangeSlider.tsx
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function RangeSlider() {
  const [value, setValue] = useState<number[]>([20, 37]);

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={(_event: Event, newValue: number | number[]) => {
          setValue(newValue as number[]);
        }}
        valueLabelDisplay="auto"
        getAriaValueText={value => `${value}°C`}
      />
    </Box>
  );
}

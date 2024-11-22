// components/mui-inputs/slider/MinimumDistanceSlider.tsx
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const minDistance = 10;

export default function MinimumDistanceSlider() {
  const [value1, setValue1] = useState<number[]>([20, 37]);
  const [value2, setValue2] = useState<number[]>([20, 37]);

  const handleChange1 = (
    _event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (typeof newValue === "number") {
      return;
    }
    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const handleChange2 = (
    _event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (typeof newValue === "number") {
      return;
    }
    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value1}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={value => `${value}°C`}
        disableSwap
      />
      <Slider
        getAriaLabel={() => "Minimum distance shift"}
        value={value2}
        onChange={handleChange2}
        valueLabelDisplay="auto"
        getAriaValueText={value => `${value}°C`}
        disableSwap
      />
    </Box>
  );
}

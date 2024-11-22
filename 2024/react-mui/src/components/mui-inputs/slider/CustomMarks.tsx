// components/mui-inputs/slider/CustomMarks.tsx
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const MAX = 100;
const MIN = 0;
const marks = [MIN, MAX].map(value => ({ value, label: "" }));

export default function CustomMarks() {
  const [val, setVal] = useState(MIN);
  const handleChange = (_event: Event, newValue: number | number[]) => {
    setVal(newValue as number);
  };

  return (
    <Box sx={{ width: 250 }}>
      <Slider
        marks={marks}
        step={10}
        value={val}
        valueLabelDisplay="auto"
        min={MIN}
        max={MAX}
        onChange={handleChange}
      />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="body2"
          onClick={() => setVal(MIN)}
          sx={{ cursor: "pointer" }}
        >
          {MIN} min
        </Typography>
        <Typography
          variant="body2"
          onClick={() => setVal(MAX)}
          sx={{ cursor: "pointer" }}
        >
          {MAX} max
        </Typography>
      </Box>
    </Box>
  );
}

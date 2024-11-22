// components/mui-inputs/slider/TrackFalseSlider.tsx
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const Separator = styled("div")(({ theme }) => ({
  height: theme.spacing(3),
}));

const marks = [0, 20, 37, 100].map(value => ({ value, label: `${value}°C` }));
const getAriaValueText = (value: number) => `${value}°C`;

export default function TrackFalseSlider() {
  return (
    <Box sx={{ width: 250 }}>
      <Typography id="track-false-slider" gutterBottom>
        Removed track
      </Typography>
      <Slider
        track={false}
        aria-labelledby="track-false-slider"
        getAriaValueText={getAriaValueText}
        defaultValue={30}
        marks={marks}
      />
      <Separator />
      <Typography id="track-false-range-slider" gutterBottom>
        Removed track range slider
      </Typography>
      <Slider
        track={false}
        aria-labelledby="track-false-range-slider"
        getAriaValueText={getAriaValueText}
        defaultValue={[20, 37, 50]}
        marks={marks}
      />
    </Box>
  );
}

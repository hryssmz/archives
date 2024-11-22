// components/mui-inputs/slider/TrackInvertedSlider.tsx
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";

const marks = [0, 20, 37, 100].map(value => ({ value, label: `${value}°C` }));

const Separator = styled("div")(({ theme }) => ({
  height: theme.spacing(3),
}));

export default function TrackInvertedSlider() {
  const valueText = (value: number) => `${value}°C`;

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="track-inverted-slider" gutterBottom>
        Inverted track
      </Typography>
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-slider"
        getAriaValueText={valueText}
        defaultValue={30}
        marks={marks}
      />
      <Separator />
      <Typography id="track-inverted-range-slider" gutterBottom>
        Inverted track range
      </Typography>
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-range-slider"
        getAriaValueText={valueText}
        defaultValue={[20, 37]}
        marks={marks}
      />
    </Box>
  );
}

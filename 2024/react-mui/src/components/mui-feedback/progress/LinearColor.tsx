// components/mui-feedback/dialog/LinearColor.tsx
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";

export default function LinearColor() {
  return (
    <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
      <LinearProgress color="secondary" />
      <LinearProgress color="success" />
      <LinearProgress color="inherit" />
    </Stack>
  );
}

// components/mui-feedback/dialog/CircularColor.tsx
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";

export default function CircularColor() {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
  );
}

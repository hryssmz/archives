// components/mui-data-display/chip/ClickableLinkChips.tsx
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

export default function ClickableLinkChips() {
  return (
    <Stack direction="row" spacing={1}>
      <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
      <Chip
        label="Clickable Link"
        component="a"
        variant="outlined"
        href="#basic-chip"
        clickable
      />
    </Stack>
  );
}

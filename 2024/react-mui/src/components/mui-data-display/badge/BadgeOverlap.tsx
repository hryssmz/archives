// components/mui-data-display/badge/BadgeOverlap.tsx
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import type { SxProps } from "@mui/material/styles";

const shapeStyles: SxProps = {
  bgcolor: "primary.main",
  width: 40,
  height: 40,
};
const shapeCircleStyles: SxProps = { ...shapeStyles, borderRadius: "50%" };
const rectangle = <Box component="span" sx={shapeStyles}></Box>;
const circle = <Box component="span" sx={{ ...shapeCircleStyles }}></Box>;

export default function BadgeOverlap() {
  return (
    <Stack spacing={3} direction="row">
      <Badge color="secondary" badgeContent=" ">
        {rectangle}
      </Badge>
      <Badge color="secondary" badgeContent=" " variant="dot">
        {rectangle}
      </Badge>
      <Badge color="secondary" overlap="circular" badgeContent=" ">
        {circle}
      </Badge>
      <Badge
        color="secondary"
        overlap="circular"
        badgeContent=" "
        variant="dot"
      >
        {circle}
      </Badge>
    </Stack>
  );
}

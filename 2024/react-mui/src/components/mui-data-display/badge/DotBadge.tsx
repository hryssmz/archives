// components/mui-data-display/badge/DotBadge.tsx
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import MailIcon from "@mui/icons-material/Mail";

export default function DotBadge() {
  return (
    <Box sx={{ color: "action.active" }}>
      <Badge color="secondary" variant="dot">
        <MailIcon />
      </Badge>
    </Box>
  );
}

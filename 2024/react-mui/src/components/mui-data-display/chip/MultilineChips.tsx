// components/mui-data-display/chip/MultilineChips.tsx
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

export default function MultilineChips() {
  return (
    <Box sx={{ width: 100 }}>
      <Chip
        sx={{
          height: "auto",
          "& .MuiChip-label": {
            display: "block",
            whiteSpace: "normal",
          },
        }}
        label="This is a chip that has multiple lines."
      />
    </Box>
  );
}

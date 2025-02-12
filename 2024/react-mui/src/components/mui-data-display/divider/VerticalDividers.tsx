// components/mui-data-display/divider/VerticalDividers.tsx
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";

export default function VerticalDividers() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          border: theme => `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          bgcolor: "background.paper",
          color: "text.secondary",
          "& svg": {
            m: 1.5,
          },
          "& hr": {
            mx: 0.5,
          },
        }}
      >
        <FormatAlignLeftIcon />
        <FormatAlignCenterIcon />
        <FormatAlignRightIcon />
        <Divider orientation="vertical" flexItem />
        <FormatBoldIcon />
        <FormatItalicIcon />
      </Box>
    </div>
  );
}

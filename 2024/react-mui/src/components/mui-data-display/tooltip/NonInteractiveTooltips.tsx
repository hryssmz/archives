// components/mui-data-display/tooltip/NonInteractiveTooltips.tsx
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export default function NonInteractiveTooltips() {
  return (
    <Tooltip title="Add" disableInteractive>
      <Button>Not interactive</Button>
    </Tooltip>
  );
}

// components/mui-data-display/tooltip/TransitionsTooltips.tsx
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Tooltip from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";

export default function TransitionsTooltips() {
  return (
    <div>
      <Tooltip title="Add">
        <Button>Grow</Button>
      </Tooltip>
      <Tooltip
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        title="Add"
      >
        <Button>Fade</Button>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title="Add">
        <Button>Zoom</Button>
      </Tooltip>
    </div>
  );
}

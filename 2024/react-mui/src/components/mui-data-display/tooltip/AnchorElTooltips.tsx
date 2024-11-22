// components/mui-data-display/tooltip/AnchorElTooltips.tsx
import { useRef } from "react";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import type { Instance } from "@popperjs/core";

export default function AnchorElTooltips() {
  const positionRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const popperRef = useRef<Instance>(null);
  const areaRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current !== null) {
      popperRef.current.update();
    }
  };

  return (
    <Tooltip
      title="Add"
      placement="top"
      arrow
      PopperProps={{
        popperRef,
        anchorEl: {
          getBoundingClientRect() {
            return new DOMRect(
              positionRef.current.x,
              areaRef.current?.getBoundingClientRect().y,
              0,
              0
            );
          },
        },
      }}
    >
      <Box
        ref={areaRef}
        onMouseMove={handleMouseMove}
        sx={{ bgcolor: "primary.main", color: "primary.contrastText", p: 2 }}
      >
        Hover
      </Box>
    </Tooltip>
  );
}

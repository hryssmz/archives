// components/mui-data-display/icon/FontAwesomeSvgIconDemo.tsx
import { forwardRef } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons/faEllipsisV";
import { faInfo } from "@fortawesome/free-solid-svg-icons/faInfo";
import type { IconDefinition } from "@fortawesome/fontawesome-common-types";

type FontAwesomeSvgIconProps = {
  icon: IconDefinition;
};

const FontAwesomeSvgIcon = forwardRef<SVGSVGElement, FontAwesomeSvgIconProps>(
  (props, ref) => {
    const { icon } = props;
    const {
      icon: [width, height, , , svgPathData],
    } = icon;

    return (
      <SvgIcon ref={ref} viewBox={`0 0 ${width} ${height}`}>
        {typeof svgPathData === "string" ? (
          <path d={svgPathData} />
        ) : (
          svgPathData.map((d, i) => (
            <path style={{ opacity: i === 0 ? 0.4 : 1 }} d={d} />
          ))
        )}
      </SvgIcon>
    );
  },
);

export default function FontAwesomeSvgIconDemo() {
  return (
    <Stack direction="row" spacing={2}>
      <IconButton aria-label="Example">
        <FontAwesomeIcon icon={faEllipsisV} />
      </IconButton>
      <IconButton aria-label="Example">
        <FontAwesomeSvgIcon icon={faEllipsisV} />
      </IconButton>
      <Button variant="contained" startIcon={<FontAwesomeIcon icon={faInfo} />}>
        Example
      </Button>
      <Button
        variant="contained"
        startIcon={<FontAwesomeSvgIcon icon={faInfo} />}
      >
        Example
      </Button>
    </Stack>
  );
}

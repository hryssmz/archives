// components/mui-data-display/icon/FontAwesomeIcon.tsx
import { useEffect } from "react";
import { green } from "@mui/material/colors";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import { loadCSS } from "fg-loadcss";

export default function FontAwesomeIcon() {
  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.14.0/css/all.css",
      // Inject before JSS
      (document.querySelector("#font-awesome-css") ??
        document.head.firstChild) as HTMLElement,
    );
    return () => {
      node.parentNode?.removeChild(node);
    };
  }, []);

  return (
    <Stack direction="row" spacing={4} alignItems="flex-end">
      <Icon baseClassName="fas" className="fa-plus-circle" />
      <Icon baseClassName="fas" className="fa-plus-circle" color="primary" />
      <Icon
        baseClassName="fas"
        className="fa-plus-circle"
        sx={{ color: green[500] }}
      />
      <Icon baseClassName="fas" className="fa-plus-circle" fontSize="small" />
      <Icon
        baseClassName="fas"
        className="fa-plus-circle"
        sx={{ fontSize: 30 }}
      />
    </Stack>
  );
}

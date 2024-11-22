// components/mui-data-display/icon/FontAwesomeIconSize.tsx
import { useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Icon from "@mui/material/Icon";
import Stack from "@mui/material/Stack";
import MdPhone from "@mui/icons-material/Phone";
import { loadCSS } from "fg-loadcss";

const theme = createTheme({
  components: {
    MuiIcon: {
      styleOverrides: {
        root: {
          // Match 24px = 3 * 2 + 1.125 * 16
          boxSizing: "content-box",
          padding: 3,
          fontSize: "1.125rem",
        },
      },
    },
  },
});

export default function FontAwesomeIconSize() {
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
    <Stack direction="row" spacing={2}>
      <ThemeProvider theme={theme}>
        <Chip icon={<MdPhone />} label="Call me" />
        <Chip
          icon={<Icon baseClassName="fas" className="fa-phone-alt" />}
          label="Call me"
        />
      </ThemeProvider>
    </Stack>
  );
}

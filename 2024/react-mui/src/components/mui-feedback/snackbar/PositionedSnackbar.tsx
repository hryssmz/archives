// components/mui-feedback/snackbar/PositionedSnackbar.tsx
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Snackbar from "@mui/material/Snackbar";
import type { SnackbarOrigin } from "@mui/material/Snackbar";

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function PositionedSnackbar() {
  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleClick = (newState: SnackbarOrigin) => () => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const buttons = (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleClick({ vertical: "top", horizontal: "center" })}
        >
          Top-Center
        </Button>
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={6}>
          <Button
            onClick={handleClick({ vertical: "top", horizontal: "left" })}
          >
            Top-Left
          </Button>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <Button
            onClick={handleClick({ vertical: "top", horizontal: "right" })}
          >
            Top-Right
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            onClick={handleClick({ vertical: "bottom", horizontal: "left" })}
          >
            Bottom-Left
          </Button>
        </Grid>
        <Grid item xs={6} textAlign="right">
          <Button
            onClick={handleClick({ vertical: "bottom", horizontal: "right" })}
          >
            Bottom-Right
          </Button>
        </Grid>
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={handleClick({ vertical: "bottom", horizontal: "center" })}
        >
          Bottom-Center
        </Button>
      </Box>
    </>
  );

  return (
    <Box sx={{ width: 500 }}>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      />
    </Box>
  );
}

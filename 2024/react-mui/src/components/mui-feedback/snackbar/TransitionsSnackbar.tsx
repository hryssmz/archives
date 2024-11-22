// components/mui-feedback/snackbar/TransitionsSnackbar.tsx
import { useState } from "react";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import MuiSlide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";
import type { SlideProps } from "@mui/material/Slide";
import type { SnackbarProps } from "@mui/material/Snackbar";

type TransitionComponent = NonNullable<SnackbarProps["TransitionComponent"]>;

interface State {
  open: boolean;
  Transition: TransitionComponent;
}

function Slide(props: SlideProps) {
  return <MuiSlide {...props} direction="up" />;
}

export default function TransitionsSnackbar() {
  const [state, setState] = useState<State>({ open: false, Transition: Fade });

  const handleClick = (Transition: TransitionComponent) => () => {
    setState({ open: true, Transition });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div>
      <Button onClick={handleClick(Grow)}>Grow Transition</Button>
      <Button onClick={handleClick(Fade)}>Fade Transition</Button>
      <Button onClick={handleClick(Slide)}>Slide Transition</Button>
      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message="I love snacks"
        key={state.Transition.name}
        autoHideDuration={1200}
      />
    </div>
  );
}

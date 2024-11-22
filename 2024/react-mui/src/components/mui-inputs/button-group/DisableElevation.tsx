// components/mui-inputs/button-group/DisableElevation.tsx
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function DisableElevation() {
  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
      <Button>One</Button>
      <Button>Two</Button>
    </ButtonGroup>
  );
}

// components/mui-inputs/button-group/BasicButtonGroup.tsx
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function BasicButtonGroup() {
  return (
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  );
}

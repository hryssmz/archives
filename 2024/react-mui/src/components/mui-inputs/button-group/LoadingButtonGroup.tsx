// components/mui-inputs/button-group/LoadingButtonGroup.tsx
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

export default function LoadingButtonGroup() {
  return (
    <ButtonGroup variant="outlined" aria-label="loading button group">
      <Button>Submit</Button>
      <LoadingButton>Fetch data</LoadingButton>
      <LoadingButton loading loadingPosition="start" startIcon={<SaveIcon />}>
        Save
      </LoadingButton>
    </ButtonGroup>
  );
}

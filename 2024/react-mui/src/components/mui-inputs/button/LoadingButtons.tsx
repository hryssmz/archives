// components/mui-lab/button/LoadingButtons.tsx
import Stack from "@mui/material/Stack";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";

export default function LoadingButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
        Fetch data
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition="start"
        variant="outlined"
        startIcon={<SaveIcon />}
      >
        Save
      </LoadingButton>
    </Stack>
  );
}

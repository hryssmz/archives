// components/mui-feedback/alert/OutlinedAlerts.tsx
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function OutlinedAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant="outlined" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an warning alert — check it out!
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an info alert — check it out!
      </Alert>
      <Alert variant="outlined" severity="success">
        This is an success alert — check it out!
      </Alert>
    </Stack>
  );
}

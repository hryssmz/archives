// components/mui-feedback/alert/FilledAlerts.tsx
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function FilledAlerts() {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant="filled" severity="error">
        This is an error alert — check it out!
      </Alert>
      <Alert variant="filled" severity="warning">
        This is an warning alert — check it out!
      </Alert>
      <Alert variant="filled" severity="info">
        This is an info alert — check it out!
      </Alert>
      <Alert variant="filled" severity="success">
        This is an success alert — check it out!
      </Alert>
    </Stack>
  );
}

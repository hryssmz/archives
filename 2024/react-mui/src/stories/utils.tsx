// stories/utils.tsx
import { useLocation, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export function DisplayLocation() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Alert
      severity="info"
      onClose={() => {
        navigate(-1);
      }}
    >
      <AlertTitle>Location</AlertTitle>
      <pre>
        <code>{JSON.stringify(location, null, 2)}</code>
      </pre>
    </Alert>
  );
}

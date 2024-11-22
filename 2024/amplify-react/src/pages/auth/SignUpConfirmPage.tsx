// pages/auth/SignUpConfirmPage.tsx
import {
  Form,
  isRouteErrorResponse,
  useNavigation,
  useRouteError,
  useSearchParams,
} from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import type { ErrorResponse } from "react-router-dom";

export default function SignUpConfirmPage() {
  const error = useRouteError() as null | Error | ErrorResponse;
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const destination = searchParams.get("destination");
  if (isRouteErrorResponse(error)) {
    if (error.status !== 400) {
      throw error;
    }
  } else if (error !== null) {
    const errorNames = ["CodeMismatchException", "AutoSignInException"];
    if (errorNames.indexOf(error.name) < 0) {
      throw error;
    }
  }
  const errorMessage = isRouteErrorResponse(error)
    ? error.statusText
    : error?.message;

  return (
    <Box component={Form} autoComplete="off" method="POST">
      <Typography sx={{ mb: 1 }}>
        Your confirmation code was sent to {destination}.
      </Typography>
      <input
        id="confirm-sign-up-username"
        name="username"
        type="hidden"
        defaultValue={username ?? ""}
      />
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <TextField
            id="confirm-sign-up-confirmation-code"
            name="confirmation-code"
            type="text"
            label="Confirmation Code"
            variant="outlined"
            required
            margin="none"
            size="small"
          />
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit">
            {navigation.state === "submitting" ? "Submitting..." : "Confirm"}
          </Button>
        </Grid>
      </Grid>
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
    </Box>
  );
}

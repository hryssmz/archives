// pages/auth/SignUpPage.tsx
import {
  Form,
  isRouteErrorResponse,
  Link,
  useNavigation,
  useRouteError,
} from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { paths } from "@/router";
import type { ErrorResponse } from "react-router-dom";

export default function SignUpPage() {
  const navigation = useNavigation();
  const error = useRouteError() as null | Error | ErrorResponse;
  if (isRouteErrorResponse(error)) {
    if (error.status !== 400) {
      throw error;
    }
  } else if (error !== null) {
    const errorNames = [
      "InvalidParameterException",
      "InvalidPasswordException",
      "UsernameExistsException",
    ];
    if (errorNames.indexOf(error.name) < 0) {
      throw error;
    }
  }
  const errorMessage = isRouteErrorResponse(error)
    ? error.statusText
    : error?.message;

  return (
    <Box component={Form} autoComplete="off" method="POST">
      <Grid container direction="column" spacing={1}>
        <Grid item container spacing={1}>
          <Grid item>
            <TextField
              id="sign-up-username"
              name="username"
              type="text"
              label="User name"
              variant="outlined"
              required
              margin="none"
              size="small"
            />
          </Grid>
          <Grid item>
            <TextField
              id="sign-up-email"
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              required
              margin="none"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid item container spacing={1}>
          <Grid item>
            <TextField
              id="sign-up-password"
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              required
              margin="none"
              size="small"
            />
          </Grid>
          <Grid item>
            <TextField
              id="sign-up-password-confirm"
              name="password-confirm"
              type="password"
              label="Password Confirm"
              variant="outlined"
              required
              margin="none"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" type="submit">
            {navigation.state === "submitting" ? "Submitting..." : "Sign up"}
          </Button>
        </Grid>
        <Grid item>
          <Link to={paths.signin}>Already have an account? Sign in</Link>
        </Grid>
      </Grid>
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
    </Box>
  );
}

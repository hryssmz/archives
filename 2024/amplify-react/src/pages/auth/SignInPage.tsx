// pages/auth/SignInPage.tsx
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

export default function SignInPage() {
  const navigation = useNavigation();
  const error = useRouteError() as null | Error | ErrorResponse;
  if (isRouteErrorResponse(error)) {
    if (error.status !== 400) {
      throw error;
    }
  } else if (error !== null) {
    const errorNames = ["NotAuthorizedException"];
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
        <Grid item>
          <TextField
            id="sign-in-username"
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
            id="sign-in-password"
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
          <Button variant="contained" type="submit">
            {navigation.state === "submitting" ? "Submitting..." : "Sign in"}
          </Button>
        </Grid>
        <Grid item>
          <Link to={paths.signup}>Don't have an account? Sign up</Link>
        </Grid>
      </Grid>
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
    </Box>
  );
}

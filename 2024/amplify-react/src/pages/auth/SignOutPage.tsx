// pages/auth/SignOutPage.tsx
import { useSubmit } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { paths } from "@/router";

export default function SignOutPage() {
  const submit = useSubmit();

  setTimeout(() => {
    submit({}, { method: "POST", action: paths.signout });
  }, 0);

  return (
    <Box>
      <Typography>Signing out...</Typography>
    </Box>
  );
}

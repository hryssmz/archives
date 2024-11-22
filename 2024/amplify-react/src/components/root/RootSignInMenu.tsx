// components/root/RootSignInMenu.tsx
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { paths } from "@/router";

export interface RootSignInMenuProps {}

export default function RootSignInMenu() {
  const navigate = useNavigate();
  return (
    <Box>
      <Button
        variant="text"
        color="inherit"
        onClick={() => navigate(paths.signin)}
      >
        Sign In
      </Button>
      <Button
        variant="text"
        color="inherit"
        onClick={() => navigate(paths.signup)}
      >
        Sign Up
      </Button>
    </Box>
  );
}

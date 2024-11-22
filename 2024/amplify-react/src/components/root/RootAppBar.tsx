// components/root/RootAppBar.tsx
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import RootAccountMenu from "./RootAccountMenu";
import RootSignInMenu from "./RootSignInMenu";

export interface RootAppBarProps {
  username?: string;
  loading: boolean;
  handleClick(event: React.MouseEvent<HTMLButtonElement>): void;
}

export default function RootAppBar({
  username,
  loading,
  handleClick,
}: RootAppBarProps) {
  return (
    <AppBar position="static" component="nav">
      <Toolbar>
        <IconButton
          color="inherit"
          size="large"
          edge="start"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        {loading ? null : username ? (
          <RootAccountMenu username={username} />
        ) : (
          <RootSignInMenu />
        )}
      </Toolbar>
    </AppBar>
  );
}

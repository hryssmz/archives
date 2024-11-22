// components/root/RootAccountMenu.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { paths } from "@/router";

export interface RootAccountMenuProps {
  username: string;
}

export default function RootAccountMenu({ username }: RootAccountMenuProps) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  return (
    <Box>
      <Typography variant="body1" component="span" sx={{ mr: 1 }}>
        Welcome, {username}!
      </Typography>
      <IconButton
        onClick={event => {
          setAnchorEl(event.currentTarget);
        }}
        aria-controls={open ? "root-account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        edge="end"
      >
        <Avatar>
          <PersonIcon />
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="root-account-menu"
        open={open}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        <MenuItem>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </MenuItem>
        <MenuItem onClick={() => navigate(paths.signout)}>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </MenuItem>
      </Menu>
    </Box>
  );
}

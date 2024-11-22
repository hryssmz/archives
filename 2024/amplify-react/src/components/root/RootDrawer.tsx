// components/root/RootDrawer.tsx
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import { drawerWidth } from "@/lib/mui";

export interface RootDrawerProps {
  open: boolean;
  handleClose(): void;
}

export default function RootDrawer({ open, handleClose }: RootDrawerProps) {
  return (
    <Drawer open={open} onClose={handleClose}>
      <Box sx={{ width: drawerWidth }}>
        <List>
          <ListItem>
            <ListItemText
              primary="My App"
              primaryTypographyProps={{
                fontSize: 20,
                fontWeight: "medium",
              }}
            />
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentTurnedInIcon />
              </ListItemIcon>
              <ListItemText primary="Todos" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

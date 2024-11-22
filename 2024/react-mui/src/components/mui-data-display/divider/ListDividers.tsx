// components/mui-data-display/divider/ListDividers.tsx
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function ListDividers() {
  return (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-label="mailbox folders"
    >
      <ListItemButton>
        <ListItemText primary="Inbox" />
      </ListItemButton>
      <Divider />
      <ListItemButton>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Trash" />
      </ListItemButton>
      <Divider light />
      <ListItemButton>
        <ListItemText primary="Spam" />
      </ListItemButton>
    </List>
  );
}

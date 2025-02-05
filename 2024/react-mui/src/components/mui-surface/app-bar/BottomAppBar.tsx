// components/mui-surface/app-bar/BottomAppBar.tsx
import { Fragment } from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

const messages = [
  {
    id: 1,
    primary: "Brunch this week?",
    secondary:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 2,
    primary: "Birthday Gift",
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 3,
    primary: "Recipe to try",
    secondary:
      "I am try out this new BBQ recipe, I think this might be amazing",
    person: "/static/images/avatar/2.jpg",
  },
  {
    id: 4,
    primary: "Yes!",
    secondary: "I have the tickets to the ReactConf for this year.",
    person: "/static/images/avatar/3.jpg",
  },
  {
    id: 5,
    primary: "Doctor's Appointment",
    secondary:
      "My appointment for the doctor was rescheduled for next Saturday.",
    person: "/static/images/avatar/4.jpg",
  },
  {
    id: 6,
    primary: "Discussion",
    secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 7,
    primary: "Summer BBQ",
    secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
    person: "/static/images/avatar/1.jpg",
  },
];

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: -30,
  left: 0,
  right: 0,
  margin: "0 auto",
});

export default function BottomAppBar() {
  return (
    <>
      <CssBaseline />
      <Paper square sx={{ pb: "50px" }}>
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ p: 2, pb: 0 }}
        >
          Inbox
        </Typography>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, primary, secondary, person }) => (
            <Fragment key={id}>
              {id === 1 && (
                <ListSubheader sx={{ bgcolor: "background.paper" }}>
                  Today
                </ListSubheader>
              )}
              {id === 3 && (
                <ListSubheader sx={{ bgcolor: "background.paper" }}>
                  Yesterday
                </ListSubheader>
              )}
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={person} />
                  </ListItemAvatar>
                  <ListItemText primary={primary} secondary={secondary} />
                </ListItemButton>
              </ListItem>
            </Fragment>
          ))}
        </List>
      </Paper>
      <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <StyledFab color="secondary" aria-label="add">
            <AddIcon />
          </StyledFab>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <MoreVertIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

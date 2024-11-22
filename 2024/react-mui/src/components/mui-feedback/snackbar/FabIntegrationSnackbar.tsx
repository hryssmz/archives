// components/mui-feedback/snackbar/FabIntegrationSnackbar.tsx
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Fab from "@mui/material/Fab";
import GlobalStyles from "@mui/material/GlobalStyles";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import MenuIcon from "@mui/icons-material/Menu";

export default function FabIntegrationSnackbar() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={theme => ({
          body: { backgroundColor: theme.palette.background.paper },
        })}
      />
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton
              edge="start"
              sx={{ mr: 2 }}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              App bar
            </Typography>
          </Toolbar>
        </AppBar>
        <Fab
          color="secondary"
          sx={{
            position: "absolute",
            bottom: theme => theme.spacing(2),
            right: theme => theme.spacing(2),
          }}
        >
          <AddIcon />
        </Fab>
        <Snackbar
          open
          autoHideDuration={6000}
          message="Archived"
          action={
            <Button color="inherit" size="small">
              Undo
            </Button>
          }
          sx={{ bottom: { xs: 90, sm: 0 } }}
        />
      </div>
    </>
  );
}

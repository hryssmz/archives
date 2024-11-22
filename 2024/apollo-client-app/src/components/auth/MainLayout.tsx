// components/auth/MainLayout.tsx
import { useTheme } from "@mui/material/styles";
import { useActor } from "@xstate/react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import Footer from "@/components/common/Footer";
import NavBar from "@/components/nav/NavBar";
import NavDrawer from "@/components/nav/NavDrawer";
import { drawerMachine } from "@/machines/drawerMachine";
import type { AuthActorRef } from "@/machines/authMachine";
import type { NotificationsSnapshot } from "@/machines/notificationsMachine";

export interface MainLayoutProps {
  children: React.ReactNode;
  authActor: AuthActorRef;
  notificationsState: NotificationsSnapshot;
}

export default function MainLayout({
  children,
  authActor,
  notificationsState,
}: MainLayoutProps) {
  const theme = useTheme();
  const [drawerState, sendDrawer, drawerActor] = useActor(drawerMachine);
  drawerActor.subscribe(({ value }) => console.log(value));
  const xsBreakpoint = useMediaQuery(theme.breakpoints.only("xs"));

  const desktopDrawerOpen = drawerState.matches({ desktop: "open" });
  const mobileDrawerOpen = drawerState.matches({ mobile: "open" });
  const toggleDrawer = () => {
    sendDrawer({ type: xsBreakpoint ? "TOGGLE_MOBILE" : "TOGGLE_DESKTOP" });
  };

  return (
    <>
      <NavBar
        drawerOpen={xsBreakpoint ? mobileDrawerOpen : desktopDrawerOpen}
        toggleDrawer={toggleDrawer}
        notificationsState={notificationsState}
      />
      <NavDrawer
        drawerOpen={xsBreakpoint ? mobileDrawerOpen : desktopDrawerOpen}
        closeMobileDrawer={() => {
          sendDrawer({ type: "CLOSE_MOBILE" });
        }}
        toggleDrawer={toggleDrawer}
        authActor={authActor}
      />
      <Box
        component="main"
        sx={{ flexGrow: 1, height: "100vh", overflow: "auto" }}
      >
        <Box
          sx={{
            minHeight: theme.spacing(13),
            [theme.breakpoints.up("sm")]: { minHeight: theme.spacing(14) },
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              minHeight: "77vh",
              py: 1,
              [theme.breakpoints.up("sm")]: {
                p: 4,
              },
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                {children}
              </Grid>
            </Grid>
          </Container>
          <Box component="footer">
            <Footer />
          </Box>
        </Box>
      </Box>
    </>
  );
}

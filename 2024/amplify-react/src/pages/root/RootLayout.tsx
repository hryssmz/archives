// pages/root/RootLayout.tsx
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "@/store";
import { getCurrentUser } from "@/store/auth";
import RootLayoutAppBar from "@/components/root/RootAppBar";
import RootLayoutDrawer from "@/components/root/RootDrawer";

export default function RootLayout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const status = useSelector(state => state.auth.status);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Box>
      <RootLayoutAppBar
        username={user?.username}
        loading={status !== "succeeded"}
        handleClick={() => {
          setDrawerOpen(open => !open);
        }}
      />
      <RootLayoutDrawer
        open={drawerOpen}
        handleClose={() => {
          setDrawerOpen(false);
        }}
      />
      <Box component="main" sx={{ m: 1 }}>
        <Outlet />
      </Box>
    </Box>
  );
}

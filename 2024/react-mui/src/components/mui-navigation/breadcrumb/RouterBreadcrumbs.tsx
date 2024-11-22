// components/mui-navigation/breadcrumb/RouterBreadcrumbs.tsx
import { useState } from "react";
import {
  createMemoryRouter,
  Link as RouterLink,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Collapse from "@mui/material/Collapse";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { LinkProps } from "@mui/material/Link";
import type { ListItemProps } from "@mui/material/ListItem";

interface ListItemLinkProps extends ListItemProps {
  to: string;
  open?: boolean;
}

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

const breadcrumbNameMap: { [key: string]: string } = {
  "/inbox": "Inbox",
  "/inbox/important": "Important",
  "/trash": "Trash",
  "/spam": "Spam",
  "/drafts": "Drafts",
};

function ListItemLink({ to, open, ...other }: ListItemLinkProps) {
  return (
    <li>
      <ListItemButton component={RouterLink} to={to} {...other}>
        <ListItemText primary={breadcrumbNameMap[to]} />
        {open === true ? (
          <ExpandLessIcon />
        ) : open === false ? (
          <ExpandMoreIcon />
        ) : null}
      </ListItemButton>
    </li>
  );
}

function LinkRouter(props: LinkRouterProps) {
  return <Link {...props} component={RouterLink} />;
}

function Page() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(x => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <LinkRouter underline="hover" color="inherit" to="/">
        Home
      </LinkRouter>
      {pathnames.map((_, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="text.primary" key={to}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}

function Layout() {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: 360 }}>
      <Outlet />
      <Box
        sx={{ bgcolor: "background.paper", mt: 1 }}
        component="nav"
        aria-label="mailbox folders"
      >
        <List>
          <ListItemLink to="/inbox" open={open} onClick={handleClick} />
          <Collapse component="li" in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              <ListItemLink sx={{ pl: 4 }} to="/inbox/important" />
            </List>
          </Collapse>
          <ListItemLink to="/trash" />
          <ListItemLink to="/spam" />
        </List>
      </Box>
    </Box>
  );
}

export default function RouterBreadcrumbs() {
  const router = createMemoryRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "*",
          element: <Page />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

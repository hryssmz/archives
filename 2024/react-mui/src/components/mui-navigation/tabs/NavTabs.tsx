// components/mui-navigation/tabs/NavTabs.tsx
import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";

function samePageLinkNavigation(
  event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
) {
  return !(
    event.defaultPrevented ||
    event.button !== 0 || // ignore everything but left-click
    event.metaKey ||
    event.ctrlKey ||
    event.altKey ||
    event.shiftKey
  );
}

interface LinkTabProps {
  label?: string;
  href?: string;
  selected?: boolean;
}

export default function NavTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (
      event.type !== "click" ||
      (event.type === "click" &&
        samePageLinkNavigation(
          event as React.MouseEvent<HTMLAnchorElement, MouseEvent>
        ))
    ) {
      setValue(newValue);
    }
  };

  const tabs: LinkTabProps[] = [
    { label: "Page One", href: "/drafts" },
    { label: "Page Two", href: "/trash" },
    { label: "Page Three", href: "/spam" },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="nav tabs example"
        role="navigation"
      >
        {tabs.map(({ label, href, selected }) => (
          <Tab
            key={label}
            label={label}
            href={href}
            component="a"
            onClick={event => {
              if (samePageLinkNavigation(event)) {
                event.preventDefault();
              }
            }}
            aria-current={selected && "page"}
          />
        ))}
      </Tabs>
    </Box>
  );
}

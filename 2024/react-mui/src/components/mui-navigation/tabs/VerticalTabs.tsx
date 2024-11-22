// components/mui-navigation/tabs/VerticalTabs.tsx
import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

interface TabData {
  label: string;
  children?: React.ReactNode;
}

export default function VerticalTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabs: TabData[] = [
    { label: "Item One", children: "Item One" },
    { label: "Item Two", children: "Item Two" },
    { label: "Item Three", children: "Item Three" },
    { label: "Item Four", children: "Item Four" },
    { label: "Item Five", children: "Item Five" },
    { label: "Item Six", children: "Item Six" },
    { label: "Item Seven", children: "Item Seven" },
  ];

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {tabs.map(({ label }, index) => (
          <Tab
            key={`vertical-tab-${index}`}
            label={label}
            id={`vertical-tab-${index}`}
            aria-controls={`vertical-tabpanel-${index}`}
          />
        ))}
      </Tabs>
      {tabs.map(({ children }, index) => (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`vertical-tabpanel-${index}`}
          aria-labelledby={`vertical-tab-${index}`}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      ))}
    </Box>
  );
}

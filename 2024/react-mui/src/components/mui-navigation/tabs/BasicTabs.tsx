// components/mui-navigation/tabs/BasicTabs.tsx
import { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";

interface TabData {
  label: string;
  children?: React.ReactNode;
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabs: TabData[] = [
    { label: "Item One", children: "Item One" },
    { label: "Item Two", children: "Item Two" },
    { label: "Item Three", children: "Item Three" },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map(({ label }, index) => (
            <Tab
              key={`simple-tab-${index}`}
              label={label}
              id={`simple-tab-${index}`}
              aria-controls={`simple-tabpanel-${index}`}
            />
          ))}
        </Tabs>
      </Box>
      {tabs.map(({ children }, index) => (
        <div
          key={`simple-tabpanel-${index}`}
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
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

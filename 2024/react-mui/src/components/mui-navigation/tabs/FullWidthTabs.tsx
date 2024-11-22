// components/mui-navigation/tabs/FullWidthTabs.tsx
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";

interface TabData {
  label: string;
  children?: React.ReactNode;
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const tabs: TabData[] = [
    { label: "Item One", children: "Item One" },
    { label: "Item Two", children: "Item Two" },
    { label: "Item Three", children: "Item Three" },
  ];

  return (
    <Box sx={{ bgcolor: "background.paper", width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          {tabs.map(({ label }, index) => (
            <Tab
              key={`full-width-tab-${index}`}
              label={label}
              id={`full-width-tab-${index}`}
              aria-controls={`full-width-tabpanel-${index}`}
            />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {tabs.map(({ children }, index) => (
          <div
            key={`full-width-tabpanel-${index}`}
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
          >
            {value === index && (
              <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        ))}
      </SwipeableViews>
    </Box>
  );
}

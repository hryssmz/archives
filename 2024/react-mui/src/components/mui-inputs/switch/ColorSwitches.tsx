// components/mui-inputs/switch/ColorSwitches.tsx
import { pink } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: pink[600],
    "&:hover": {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: pink[600],
  },
}));

const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
  "aria-label": "Color switch demo",
};

export default function ColorSwitches() {
  return (
    <div>
      <Switch inputProps={inputProps} defaultChecked />
      <Switch inputProps={inputProps} defaultChecked color="secondary" />
      <Switch inputProps={inputProps} defaultChecked color="warning" />
      <Switch inputProps={inputProps} defaultChecked color="default" />
      <PinkSwitch inputProps={inputProps} defaultChecked />
    </div>
  );
}

// components/mui-inputs/switch/BasicSwitches.tsx
import Switch from "@mui/material/Switch";

const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
  "aria-label": "Switch demo",
};

export default function BasicSwitches() {
  return (
    <div>
      <Switch inputProps={inputProps} defaultChecked />
      <Switch inputProps={inputProps} />
      <Switch inputProps={inputProps} disabled defaultChecked />
      <Switch inputProps={inputProps} disabled />
    </div>
  );
}

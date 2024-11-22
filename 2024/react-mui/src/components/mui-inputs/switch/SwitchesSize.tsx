// components/mui-inputs/switch/SwitchesSize.tsx
import Switch from "@mui/material/Switch";

const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
  "aria-label": "Size switch demo",
};

export default function SwitchesSize() {
  return (
    <div>
      <Switch inputProps={inputProps} defaultChecked size="small" />
      <Switch inputProps={inputProps} defaultChecked />
    </div>
  );
}

// components/mui-inputs/checkbox/Checkboxes.tsx
import Checkbox from "@mui/material/Checkbox";

const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
  "aria-label": "Checkbox demo",
};

export default function Checkboxes() {
  return (
    <div>
      <Checkbox inputProps={inputProps} defaultChecked />
      <Checkbox inputProps={inputProps} />
      <Checkbox inputProps={inputProps} disabled />
      <Checkbox inputProps={inputProps} disabled checked />
    </div>
  );
}

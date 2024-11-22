// components/mui-inputs/checkbox/ColorCheckboxes.tsx
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
  "aria-label": "Checkbox demo",
};

export default function ColorCheckboxes() {
  return (
    <div>
      <Checkbox inputProps={inputProps} defaultChecked />
      <Checkbox inputProps={inputProps} defaultChecked color="secondary" />
      <Checkbox inputProps={inputProps} defaultChecked color="success" />
      <Checkbox inputProps={inputProps} defaultChecked color="default" />
      <Checkbox
        inputProps={inputProps}
        defaultChecked
        sx={{
          color: pink[800],
          "&.Mui-checked": { color: pink[600] },
        }}
      />
    </div>
  );
}

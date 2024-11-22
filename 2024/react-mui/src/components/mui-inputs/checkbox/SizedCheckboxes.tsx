// components/mui-inputs/checkbox/SizedCheckboxes.tsx
import Checkbox from "@mui/material/Checkbox";

const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
  "aria-label": "Checkbox demo",
};

export default function SizeCheckboxes() {
  return (
    <div>
      <Checkbox inputProps={inputProps} defaultChecked size="small" />
      <Checkbox inputProps={inputProps} defaultChecked />
      <Checkbox
        inputProps={inputProps}
        defaultChecked
        sx={{ "& .MuiSvgIcon-root": { fontSize: 28 } }}
      />
    </div>
  );
}

// components/mui-inputs/checkbox/ControlledCheckbox.tsx
import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";

export default function ControlledCheckbox() {
  const [checked, setChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "controlled" }}
    />
  );
}

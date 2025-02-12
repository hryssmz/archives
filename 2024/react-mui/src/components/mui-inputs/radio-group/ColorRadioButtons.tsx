// components/mui-inputs/radio-group/ColorRadioButtons.tsx
import { useState } from "react";
import { pink } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import type { RadioProps } from "@mui/material/Radio";

export default function ColorRadioButtons() {
  const [selectedValue, setSelectedValue] = useState("a");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string): RadioProps => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div>
      <Radio {...controlProps("a")} />
      <Radio {...controlProps("b")} color="secondary" />
      <Radio {...controlProps("c")} color="success" />
      <Radio {...controlProps("d")} color="default" />
      <Radio
        {...controlProps("e")}
        sx={{
          color: pink[800],
          "&.Mui-checked": {
            color: pink[600],
          },
        }}
      />
    </div>
  );
}

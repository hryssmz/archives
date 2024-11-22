// components/mui-inputs/text-field/Inputs.tsx
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import type { InputProps } from "@mui/material/Input";

const inputProps: InputProps["inputProps"] = { "aria-label": "description" };

export default function Inputs() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input defaultValue="Hello world" inputProps={inputProps} />
      <Input placeholder="Placeholder" inputProps={inputProps} />
      <Input disabled defaultValue="Disabled" inputProps={inputProps} />
      <Input defaultValue="Error" error inputProps={inputProps} />
    </Box>
  );
}

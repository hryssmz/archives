// components/mui-inputs/text-field/UseFormControl.tsx
import { useMemo } from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";

function MyFormHelperText() {
  const { focused } = useFormControl() || {};

  const helperText = useMemo(() => {
    if (focused) {
      return "This field is being focused";
    }

    return "Helper text";
  }, [focused]);

  return <FormHelperText>{helperText}</FormHelperText>;
}

export default function UseFormControl() {
  return (
    <form noValidate autoComplete="off">
      <FormControl sx={{ width: "25ch" }}>
        <OutlinedInput placeholder="Please enter text" />
        <MyFormHelperText />
      </FormControl>
    </form>
  );
}

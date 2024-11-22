// components/mui-inputs/text-field/FormattedInputs.tsx
import { forwardRef, useState } from "react";
import { IMaskInput } from "react-imask";
import { NumericFormat } from "react-number-format";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import type { NumericFormatProps } from "react-number-format";

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const TextMaskCustom = forwardRef<HTMLInputElement, CustomProps>(
  function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <IMaskInput
        {...other}
        mask="(#00) 000-0000"
        definitions={{ "#": /[1-9]/ }}
        inputRef={ref}
        onAccept={value => onChange({ target: { name: props.name, value } })}
        overwrite
      />
    );
  },
);

const NumericFormatCustom = forwardRef<NumericFormatProps, CustomProps>(
  function NumericFormatCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={values => {
          onChange({ target: { name: props.name, value: values.value } });
        }}
        thousandSeparator
        valueIsNumericString
        prefix="$"
      />
    );
  },
);

export default function FormattedInputs() {
  const [values, setValues] = useState({
    textmask: "(100) 000-0000",
    numberformat: "1320",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Stack direction="row" spacing={2}>
      <FormControl variant="standard">
        <InputLabel htmlFor="formatted-text-mask-input">react-imask</InputLabel>
        <Input
          value={values.textmask}
          onChange={handleChange}
          name="textmask"
          id="formatted-text-mask-input"
          /* eslint-disable @typescript-eslint/no-explicit-any */
          inputComponent={TextMaskCustom as any}
        />
      </FormControl>
      <TextField
        label="react-number-format"
        value={values.numberformat}
        onChange={handleChange}
        name="numberformat"
        id="formatted-numberformat-input"
        /* eslint-disable @typescript-eslint/no-explicit-any */
        InputProps={{ inputComponent: NumericFormatCustom as any }}
        variant="standard"
      />
    </Stack>
  );
}

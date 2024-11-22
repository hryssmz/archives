// components/mui-inputs/radio-group/UseRadioGroup.tsx
import { styled } from "@mui/material/styles";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup, { useRadioGroup } from "@mui/material/RadioGroup";
import type { FormControlLabelProps } from "@mui/material/FormControlLabel";

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked: boolean;
}

const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel {...props} />
))(({ theme, checked }) => ({
  ".MuiFormControlLabel-label": checked && {
    color: theme.palette.primary.main,
  },
}));

function MyFormControlLabel(props: FormControlLabelProps) {
  const radioGroup = useRadioGroup();
  const checked = !!radioGroup && radioGroup.value === props.value;
  return <StyledFormControlLabel checked={checked} {...props} />;
}

export default function UseRadioGroup() {
  return (
    <RadioGroup name="use-radio-group" defaultValue="first">
      <MyFormControlLabel value="first" label="First" control={<Radio />} />
      <MyFormControlLabel value="second" label="Second" control={<Radio />} />
    </RadioGroup>
  );
}

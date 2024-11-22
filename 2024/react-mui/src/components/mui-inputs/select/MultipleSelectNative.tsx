// components/mui-inputs/select/MultipleSelectNative.tsx
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function MultipleSelectNative() {
  const [personName, setPersonName] = useState<string[]>([]);
  const handleChangeMultiple = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const { options } = event.target;
    const values = Array.from(options)
      .filter(({ selected }) => selected)
      .map(({ value }) => value);
    setPersonName(values);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120, maxWidth: 300 }}>
        <InputLabel shrink htmlFor="select-multiple-native">
          Native
        </InputLabel>
        <Select
          multiple
          native
          value={personName}
          // @ts-expect-error Typings are not considering `native`
          onChange={handleChangeMultiple}
          label="Native"
          inputProps={{ id: "select-multiple-native" }}
        >
          {names.map(name => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

// components/mui-inputs/button/TextButtons.tsx
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function TextButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </Stack>
  );
}

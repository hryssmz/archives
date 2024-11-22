// components/mui-feedback/snackbar/LongTextSnackbar.tsx
import Button from "@mui/material/Button";
import SnackbarContent from "@mui/material/SnackbarContent";
import Stack from "@mui/material/Stack";

const action = (
  <Button color="secondary" size="small">
    lorem ipsum dolorem
  </Button>
);

export default function LongTextSnackbar() {
  return (
    <Stack spacing={2} sx={{ maxWidth: 600 }}>
      <SnackbarContent message="I love snacks." action={action} />
      <SnackbarContent message="I love candy. I love cookies. I love cupcakes. I love cheesecake. I love chocolate." />
      <SnackbarContent
        message="I love candy. I love cookies. I love cupcakes."
        action={action}
      />
      <SnackbarContent
        message="I love candy. I love cookies. I love cupcakes. I love cheesecake. I love chocolate."
        action={action}
      />
    </Stack>
  );
}

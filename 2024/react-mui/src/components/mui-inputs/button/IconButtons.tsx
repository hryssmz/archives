// components/mui-inputs/button/IconButtons.tsx
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function IconButtons() {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="add an alarm" color="secondary">
        <AlarmIcon />
      </IconButton>
      <IconButton aria-label="add to shopping cart" color="primary">
        <AddShoppingCartIcon />
      </IconButton>
    </Stack>
  );
}

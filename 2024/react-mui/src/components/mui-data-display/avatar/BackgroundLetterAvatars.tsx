// components/mui-data-display/avatar/BackgroundLetterAvatars.tsx
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

function stringToColor(name: string) {
  const hash = Array.from(Array(name.length).keys()).reduce(
    (acc, i) => name.charCodeAt(i) + ((acc << 5) - acc),
    0
  );
  const color = Array.from(Array(3).keys()).reduce((acc, i) => {
    const value = (hash >> (i * 8)) & 0xff;
    return acc + value.toString(16).padStart(2, "0");
  }, "#");
  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function BackgroundLetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar("Kent Dodds")} />
      <Avatar {...stringAvatar("Jed Watson")} />
      <Avatar {...stringAvatar("Tim Neutkens")} />
    </Stack>
  );
}

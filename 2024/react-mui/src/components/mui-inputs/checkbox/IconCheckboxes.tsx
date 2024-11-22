// components/mui-inputs/checkbox/IconCheckboxes.tsx
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
  "aria-label": "Checkbox demo",
};

export default function IconCheckboxes() {
  return (
    <div>
      <Checkbox
        inputProps={inputProps}
        icon={<FavoriteBorderIcon />}
        checkedIcon={<FavoriteIcon />}
      />
      <Checkbox
        inputProps={inputProps}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
    </div>
  );
}

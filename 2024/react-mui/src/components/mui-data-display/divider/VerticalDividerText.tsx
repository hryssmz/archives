// components/mui-data-display/divider/VerticalDividerText.tsx
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import MuiGrid from "@mui/material/Grid";

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function VerticalDividerText() {
  const content = (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id
      dignissim justo. Nulla ut facilisis ligula. Interdum et malesuada fames ac
      ante ipsum primis in faucibus. Sed malesuada lobortis pretium.
    </div>
  );

  return (
    <Grid container>
      <Grid item xs>
        {content}
      </Grid>
      <Divider orientation="vertical" flexItem>
        VERTICAL
      </Divider>
      <Grid item xs>
        {content}
      </Grid>
    </Grid>
  );
}

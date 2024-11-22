// components/mui-feedback/skeleton/SkeletonTypography.tsx
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import type { TypographyProps } from "@mui/material/Typography";

const variants: readonly TypographyProps["variant"][] = [
  "h1",
  "h3",
  "body1",
  "caption",
];

function TypographyDemo({ loading = false }: { loading?: boolean }) {
  return (
    <div>
      {variants.map(variant => (
        <Typography component="div" key={variant} variant={variant}>
          {loading ? <Skeleton /> : variant}
        </Typography>
      ))}
    </div>
  );
}

export default function SkeletonTypography() {
  return (
    <Grid container spacing={8}>
      <Grid item xs>
        <TypographyDemo loading />
      </Grid>
      <Grid item xs>
        <TypographyDemo />
      </Grid>
    </Grid>
  );
}

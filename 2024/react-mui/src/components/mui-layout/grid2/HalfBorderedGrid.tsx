// components/mui-layout/grid2/HalfBorderedGrid.tsx
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";

export default function HalfBorderedGrid() {
  const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 } as const;
  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={theme => ({
          "--Grid-borderWidth": "1px",
          borderTop: "var(--Grid-borderWidth) solid",
          borderColor: "divider",
          "& > div": {
            borderRight: "var(--Grid-borderWidth) solid",
            borderBottom: "var(--Grid-borderWidth) solid",
            borderColor: "divider",
            ...(Object.keys(colWidth) as Array<keyof typeof colWidth>).reduce(
              (result, key) => ({
                ...result,
                [`&:nth-of-type(${12 / colWidth[key]}n)`]: {
                  [theme.breakpoints.only(key)]: {
                    borderRight: "none",
                  },
                },
              }),
              {},
            ),
          },
        })}
      >
        {[...Array(6)].map((_, index) => (
          <Grid key={index} {...colWidth} minHeight={160}></Grid>
        ))}
      </Grid>
    </Box>
  );
}

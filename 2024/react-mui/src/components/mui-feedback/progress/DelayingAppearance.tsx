// components/mui-feedback/dialog/DelayingAppearance.tsx
import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";

type Query = "idle" | "progress" | "success";

export default function DelayingAppearance() {
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState<Query>("idle");
  const timerRef = useRef<number>();

  useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    []
  );

  const handleClickLoading = () => {
    setLoading(prevLoading => !prevLoading);
  };

  const handleClickQuery = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (query !== "idle") {
      setQuery("idle");
      return;
    }

    setQuery("progress");
    timerRef.current = window.setTimeout(() => {
      setQuery("success");
    }, 2000);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ height: 40 }}>
        <Fade
          in={loading}
          style={{ transitionDelay: loading ? "800ms" : "0ms" }}
          unmountOnExit
        >
          <CircularProgress />
        </Fade>
      </Box>
      <Button onClick={handleClickLoading} sx={{ m: 2 }}>
        {loading ? "Stop loading" : "Loading"}
      </Button>
      <Box sx={{ height: 40 }}>
        {query === "success" ? (
          <Typography>Success!</Typography>
        ) : (
          <Fade
            in={query === "progress"}
            style={{ transitionDelay: query === "progress" ? "800ms" : "0ms" }}
            unmountOnExit
          >
            <CircularProgress />
          </Fade>
        )}
      </Box>
      <Button onClick={handleClickQuery} sx={{ m: 2 }}>
        {query !== "idle" ? "Reset" : "Simulate a load"}
      </Button>
    </Box>
  );
}

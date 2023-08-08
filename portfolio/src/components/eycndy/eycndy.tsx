import "./eycndy.css";
import { Box } from "@mui/material";

export default function Eycndy() {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        height: "min-content",
        p: "24px",
        gap: "24px",
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(130deg, rgb(255, 0, 183) 0%, rgb(30, 0, 255) 100%)",
      }}
    ></Box>
  );
}

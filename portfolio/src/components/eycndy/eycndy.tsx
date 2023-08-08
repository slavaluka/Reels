import "./eycndy.css";
import { Box } from "@mui/material";

export default function Eycndy() {
  const boxStyle = {
    borderRadius: "20px",
    height: "317px",
    display: "flex",
    flexDirection: "column",
    background: `url("https://images.squarespace-cdn.com/content/v1/641a832cd4167e73e6d2e927/cc465918-f939-4167-b781-fc46ea9e98f4/ezgif-4-bd5efca93b.gif?format=2500w")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundBlendMode: "overlay",
  };

  return <Box sx={boxStyle}>{}</Box>;
}

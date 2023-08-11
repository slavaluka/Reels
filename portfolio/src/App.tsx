import { Container, Box } from "@mui/material";
import "./App.css";
import Info from "./components/info/info";
import Spotify from "./components/spotify/spotify";
import Instagram from "./components/instagram/instagram";
import Eycndy from "./components/eycndy/eycndy";
import Vimeo from "./components/vimeo/vimeo";
import Iphone from "./components/iphone/iphone";

export default function App() {
  const columnStyle = {
    height: "min-content",
    width: "100%",
    gap: "24px",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        p: ["0 10px", "1.5rem"], // Padding for mobile: top and bottom 0, left and right 10px
      }}
    >
      <Box
        sx={{
          display: "flex",
          placeContent: "flex-start",
          alignItems: "flex-start",
          flexFlow: ["column", "column", "row"],
          height: "min-content",
          gap: "24px",
          p: ["1.5rem 0", "0 1.5rem"],
          maxWidth: ["390px", "390px", "none"],
          mx: ["auto", "auto", 0],
        }}
      >
        <Box sx={columnStyle}>
          <Info />
          <Spotify />
          <Instagram />
          <Vimeo />
        </Box>
        <Box sx={columnStyle}>
          <Eycndy />
          <Iphone />
        </Box>
      </Box>
    </Container>
  );
}

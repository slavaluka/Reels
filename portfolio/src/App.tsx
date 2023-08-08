import { Container, Box } from "@mui/material";
import "./App.css";
import Info from "./components/info/info";
import Spotify from "./components/spotify/spotify";
import Instagram from "./components/instagram/instagram";
import Eycndy from "./components/eycndy/eycndy";
import Vimeo from "./components/vimeo/vimeo";

export default function App() {
  const columnStyle = {
    height: "min-content",
    width: "100%",
    gap: "24px",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          placeContent: "flex-start",
          alignItems: "flex-start",
          flexFlow: "row",
          height: "min-content",
          gap: "24px",
          p: "1.5rem",
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
        </Box>
      </Box>
    </Container>
  );
}

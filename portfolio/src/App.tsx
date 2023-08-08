import { Container, Box } from "@mui/material";
import "./App.css";
import Info from "./components/info/info";
import Spotify from "./components/spotify/spotify";
import Instagram from "./components/instagram/instagram";
import Eycndy from "./components/eycndy/eycndy";

export default function App() {
  const columnStyle = {
    height: "100vh",
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
          height: "min-content", // min-content
          gap: "24px",
          p: "1.5rem",
        }}
      >
        <Box sx={columnStyle}>
          <Info></Info>
          <Spotify></Spotify>
          <Instagram></Instagram>
        </Box>
        <Box sx={columnStyle}>
          <Eycndy></Eycndy>
        </Box>
      </Box>
    </Container>
  );
}

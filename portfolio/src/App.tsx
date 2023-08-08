import { Container, Box } from "@mui/material";
import "./App.css";
import Info from "./components/info/info";
import Spotify from "./components/spotify/spotify";

export default function App() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          placeContent: "flex-start",
          alignItems: "flex-start",
          flexFlow: "row",
          height: "100vh", // min-content
          gap: "24px",
          p: "1.5rem",
        }}
      >
        <Box
          sx={{
            height: "100vh",
            width: "100%",
            gap: "24px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Info></Info>
          <Spotify></Spotify>
        </Box>
        <Box sx={{ height: "100vh", width: "100%" }}></Box>
      </Box>
    </Container>
  );
}
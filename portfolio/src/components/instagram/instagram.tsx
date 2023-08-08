import { Box } from "@mui/material";
import "./instagram.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Photo from "../../assets/Photo.png";

export default function Instagram() {
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
          "radial-gradient(94.3% 175% at 93.8% 25%, rgba(29, 240, 68, 0.2) 0%, rgba(45, 82, 44, 0.125) 100%)",
      }}
    >
      <img
        className="video-instagram"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmxseXl6ZnF2a3g3N2IxdzMybjczYmt5ZWR2NDJwbXd5aDY0YWlnbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ITdyPnvPzB4j9mAdbQ/giphy-downsized-large.gif"
        alt=""
      />
      <p className="caption-instagram">Can't wait to show you my work! 😁</p>
      <Stack direction="row" spacing={1.8}>
        <Avatar alt="S" src={Photo} sx={{ width: 42, height: 42 }} />
        <Stack direction="column" spacing={0.3}>
          <p className="nickname">@slavalukianchuk</p>
          <p className="full-name">Sláva lukianchuk</p>
        </Stack>
      </Stack>
    </Box>
  );
}

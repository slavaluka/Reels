import { Box } from "@mui/material";
import "./info.css";

export default function Info() {
  return (
    <Box
      sx={{
        border: "1px solid",
        borderColor: "rgb(31, 31, 31)",
        borderRadius: "20px",
        height: "min-content",
        p: "48px",
        gap: "24px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p className="logo">á</p>
      <p className="name">slávalukianchuk</p>
      <p className="bio">
        I'm a filmmaker based in Kharkiv, UA currently filming reels and
        directing fashion movies.{" "}
      </p>
      <a
        href="https://www.instagram.com/slavalukianchuk"
        target="_blank"
        rel="noopener noreferrer"
        className="follow-me"
      >
        <Box
          sx={{
            height: "28px",
            width: "120px",
            display: "flex",
            flexDirection: "row",
            background: "white",
            borderRadius: "48px",
            placeContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <p className="instagram-btn">Follow me</p>
        </Box>
      </a>
    </Box>
  );
}

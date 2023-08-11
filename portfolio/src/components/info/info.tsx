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
        <div className="svg-gray">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="black"
          >
            <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
          </svg>
        </div>
        <p className="instagram-btn">Follow me</p>
      </Box>
    </Box>
  );
}

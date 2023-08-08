import { Box } from "@mui/material";
import "./vimeo.css";

export default function Vimeo() {
  const boxStyle = {
    borderRadius: "20px",
    height: "317px",
    display: "flex",
    flexDirection: "column",
    background: `url("https://images.squarespace-cdn.com/content/v1/641a832cd4167e73e6d2e927/a3c580dc-44db-4111-b5bf-a1e7d2c9c844/tumblr_063663c1147ed5a423bb01caa3d1ea14_8d62924b_540.gif?format=1500w")`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundBlendMode: "overlay",
    position: "relative",
  };

  return (
    <Box sx={boxStyle}>
      <a href="/" className="vimeo-link">
        <svg
          className="icon-vimeo"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M22.875 10.063c-2.442 5.217-8.337 12.319-12.063 12.319-3.672 0-4.203-7.831-6.208-13.043-.987-2.565-1.624-1.976-3.474-.681l-1.128-1.455c2.698-2.372 5.398-5.127 7.057-5.28 1.868-.179 3.018 1.098 3.448 3.832.568 3.593 1.362 9.17 2.748 9.17 1.08 0 3.741-4.424 3.878-6.006.243-2.316-1.703-2.386-3.392-1.663 2.673-8.754 13.793-7.142 9.134 2.807z" />
        </svg>
      </a>
    </Box>
  );
}

export default function Spotify() {
  const iframeStyle = {
    borderRadius: "12px", // Define your styles here
  };

  return (
    <iframe
      style={iframeStyle}
      src="https://open.spotify.com/embed/track/444vevlQjTnKioLLncteGv?utm_source=generator"
      width="100%"
      height="152"
      frameBorder="0"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  );
}

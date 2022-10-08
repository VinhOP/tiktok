import { useState } from "react";
import images from "../../assets/images";

function Image({ src, fallbackImg = images.noImage, ...props }) {
  const [fallback, setFallback] = useState("");

  const handleError = () => {
    setFallback(fallbackImg);
  };

  return <img src={fallback || src} onError={handleError} {...props} />;
}

export default Image;

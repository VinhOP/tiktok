import { useState } from "react";
import { PropTypes } from "prop-types";
import images from "../../assets/images";

function Image({
  src,
  alt,
  className,
  fallbackImg = images.noImage,
  ...props
}) {
  const [fallback, setFallback] = useState("");

  const handleError = () => {
    setFallback(fallbackImg);
  };

  return (
    <img
      src={fallback || src}
      alt={alt}
      className={className}
      onError={handleError}
      {...props}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string,
  fallbackImg: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;

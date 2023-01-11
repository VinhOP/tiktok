import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value]);

  return debounced;
}

useDebounce.PropTypes = {
  value: PropTypes.string,
  delay: PropTypes.number,
};
export default useDebounce;

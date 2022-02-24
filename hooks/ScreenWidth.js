import { useEffect, useState } from "react";

export function useScreenWidth({ width }) {
  const [matched, setMatched] = useState(false);
  useEffect(() => {
    function matchMedia() {
      console.log("w");
      if (window.matchMedia(`(min-width:${width}px)`).matches) {
        setMatched(true);
      } else {
        setMatched(false);
      }
    }

    matchMedia();

    //debounce
    var doit;
    function handleResize() {
      clearTimeout(doit);
      doit = setTimeout(() => {
        matchMedia();
      }, 500);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  return matched;
}

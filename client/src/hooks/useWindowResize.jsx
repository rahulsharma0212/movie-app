import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    //hanler
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    //get call immediately when hook is initiated
    handleResize();
    //cleanup the listner
    return () => window.removeEventListener("resize", handleResize);
  }, []); //only runs once (empty array)

  return windowSize;
};

export default useWindowSize;

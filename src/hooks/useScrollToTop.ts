import { useEffect } from "react";

export const useScrollToTop = () => {
  useEffect(() => {
    if(window)
    window.scrollTo(0, 0);
  }, []);
};

import { useEffect, useState } from "react";

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    if(typeof window !== 'undefined'){
      const newMedia = window.matchMedia('(max-width: 768px)')

      const resizeListener = () => {
        setIsMobile(newMedia.matches);
      };
  
      resizeListener();
  
      window.addEventListener('resize', resizeListener);
  
      return () => window.removeEventListener('resize', resizeListener);
    }

  }, [isMobile])

  return { isMobile };

};

export default useMobile;
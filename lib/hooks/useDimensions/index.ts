import { useState, useEffect } from 'react';

const getSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
};
export default function useDimensions() {
  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

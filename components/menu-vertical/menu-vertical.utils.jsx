import { useState, useEffect } from 'atomico';

export function useWindowDimensions() {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 767.2;
  const isTablet = width > 767.2 && width <= 1023.2;

  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  });

  return { width, isMobile, isTablet };
}

export const Bullet = () => (
  <div className="bullet">
    <div className="bullet__square"></div>
  </div>
);

// import type { FunctionComponent, FC } from "react"
import { useRef, useEffect, useState, ImgHTMLAttributes } from "react";

type LazyImageProps = {
  src: string;
  onLazyLoad?: (img: HTMLImageElement) => void;
};

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative;

//? MEJOR FORMA Forma explicita (Tipando lo que retorna la funcion)
export const LazyImage = ({ 
    src,
    onLazyLoad,
    ...imgProps
    }: Props): JSX.Element => {
  
  const node = useRef<HTMLImageElement>(null);

  const [currentSrc, setCurrentSrc] = useState(
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
  );

  useEffect(() => {
    // New Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !node.current) {
            return;
          }
          setCurrentSrc(src);

          if (typeof onLazyLoad === 'function') {
            onLazyLoad(node.current);
          }
        });
      });

    // Observe node
    if (node.current) {
      observer.observe(node.current);
    }

    // Disconnect
    return () => {
      observer.disconnect();
    };
    
  }, [src, onLazyLoad]);

  return <img ref={node} src={src} {...imgProps} />;
};

// export const RandomFox = () => { // Forma implicita
//     return <img />
// }

// export const RandomFox: FunctionComponent = () => { // Forma explicita (Tipando lo que retorna la constante)
//     return <img />
// }

// export const RandomFox: FC = () => { // Forma explicita (Tipando lo que retorna la constante)
//     return <img />
// }

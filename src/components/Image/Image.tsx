import { useState, useEffect, useRef } from 'react';
import './Image.scss';

interface ImageInterface {
  label: string,
  image: string,
};

const Image = (props: ImageInterface) => {
  const [span, setSpan] = useState<number>();
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    imageRef.current!.addEventListener('load', () => {
      const height = imageRef.current!.clientHeight;
      const span = Math.ceil(height / 10) + 1 ;
      setSpan(span);
    });
  }, []);
  return (
    <div className={'img-overlay'} style={{ gridRowEnd: `span ${span}` }}>
      <div className={'image-wrapper'}>
        <img ref={imageRef} src={props.image} alt={props.label} />
        <p>{props.label}</p>
      </div>
    </div>
  );
};

export default Image;
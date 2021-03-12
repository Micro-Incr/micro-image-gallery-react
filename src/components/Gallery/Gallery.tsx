import { useState, useEffect } from 'react';
import Axios from './../../api/server';
import Image from './../Image/Image';
import './Gallery.scss';

const Gallery = () => {
  const [images, setImages] = useState<Blob[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await Axios.get('https://api.unsplash.com/photos/');
      const data = res.data.map((img: any) => {
        return { label: img.user.name, image: img.urls.regular };
      });
      setImages(data);
    };
    fetchData();
  }, []);

  const mappedImages = images.map((image : any, index: number ) => {
    return <Image label={image.label} image={image.image}  key={index} />;
  });
  return(
    <div className={'gallery-wrapper'}>{ mappedImages }</div>
  );
};

export  default  Gallery;
import { useState, useEffect } from 'react';
import Axios from './../../api/server';
import Image from './../Image/Image';
import './Gallery.scss';

interface GalleryInterface {
  query: string
};

const Gallery = (props: GalleryInterface) => {
  const [images, setImages] = useState<Blob[]>([]);
  const fetchData = async () => {
    const res = await Axios.get('https://api.unsplash.com/search/photos?query='+props.query);
    if(res.data.results !== null){
      const data = res.data.results.map((img: any) => {
        return { label: img.user.name, image: img.urls.regular };
      });
      setImages(data);
    }
  };
  useEffect(() => {
    fetchData().then();
  }, [props.query]);

  const mappedImages = images.map((image : any, index: number ) => {
    return <Image label={image.label} image={image.image}  key={index} />;
  });
  return(
    <div className={'gallery-wrapper'}>{ mappedImages }</div>
  );
};

export  default  Gallery;
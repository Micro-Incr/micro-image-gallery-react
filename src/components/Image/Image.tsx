import './Image.scss';

interface ImageInterface {
  label: string,
  image: string
};

const Image = (props: ImageInterface) => {
  return (
    <div className={'img-overlay'}>
      <div className={'image-wrapper'}>
        <img src={props.image} alt={props.label} />
        <p>{props.label}</p>
      </div>
    </div>
  );
};

export default Image;
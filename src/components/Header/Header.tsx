import Upload from './../Upload/Upload';
import './Header.scss';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const handleOpen = () => {
    setIsOpen(prev => !prev);
  };
  return(
    <>
      <header className={'header'}>
        <div className={'left'}>
          <div className={'logo'}>
            <h3>Image</h3>
            <p>Gallery</p>
          </div>
          <input type={'text'} placeholder={'Search by name'} />
        </div>
        <div className={'right'}>
          <button onClick={handleOpen}>Add a Photo</button>
        </div>
      </header>
      { isOpen ?<Upload setIsOpen={setIsOpen} handleOpen={handleOpen} />: '' }
    </>
  );
};

export  default  Header;
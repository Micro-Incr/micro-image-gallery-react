import React from 'react';
import Upload from './../Upload/Upload';
import './Header.scss';
import { useState } from 'react';

interface HeaderInterFace {
  setQuery: any
};

const Header = (props: HeaderInterFace) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const handleOpen = () => {
    setIsOpen(prev => !prev);
  };
  const onInputChange = async (e: any) => {
    props.setQuery(e.target.value || 'cars');
  };
  return(
    <>
      <header className={'header'}>
        <div className={'left'}>
          <div className={'logo'}>
            <h3>Image</h3>
            <p>Gallery</p>
          </div>
          <input type={'text'} placeholder={'Search by name'} onChange={onInputChange} />
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
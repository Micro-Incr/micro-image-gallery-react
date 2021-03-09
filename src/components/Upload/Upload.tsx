import './Upload.scss';
import ReactDOM from 'react-dom';
const Upload = (props: any) => {

  return(
    ReactDOM.createPortal(
      <>
        <div className={'overlay'}>
          <div className={'upload-wrapper'}>
            <h2>Add a new photo</h2>
            <form>
              <div className={'input-wrapper'}>
                <label>Label</label>
                <input type={'text'} placeholder={'Enter the title of the image'} />
              </div>
              <div className={'input-wrapper'}>
                <label>Photo URL</label>
                <input type={'text'} placeholder={'Enter the image url'} />
              </div>
              <div className={'button-wrapper'}>
                <button type={'button'} className={'cancel'} onClick={props.handleOpen} >Cancel</button>
                <button type={'submit'} className={'submit'}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </>, document.getElementById('portal')!
    )
  );
};

export  default  Upload;
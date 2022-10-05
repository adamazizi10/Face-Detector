import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div className="">
            <div>
                <label htmlFor="email"> <h1 id="overview" className="htmlForm-title">Face Detector<br /><br /></h1>
                    <p className='pImg'>This application can detect the face on any picture. Simply Enter an Image Link!</p><br />
                    <input onChange={onInputChange} className='emailForImgLink' placeholder="Enter Link Here" required />
                    <br /><button className='grow f4 link ph3 pv2 dib white buttonMine detectButtonB' style={{marginTop: '16px'}} onClick={onButtonSubmit}>Detect</button></label>
            </div>
        </div>
    );
}

export default ImageLinkForm;
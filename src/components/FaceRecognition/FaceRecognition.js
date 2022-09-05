import React from 'react';
import './FaceRecognition.css';
import Footer from '../Footer/Footer';

const FaceRecognition = ({ imageUrl, box }) => {
    return (
        <div>
            <div className='center ImageFixFaceRec'>
                <div className='absolute mt2'>
                    <img alt='' id='inputimage' src={imageUrl} width='500px' height='auto' />
                    <div className='bounding-box-FaceRec'
                        style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}></div>
                </div>
            </div>
        </div>
    );
}

export default FaceRecognition;
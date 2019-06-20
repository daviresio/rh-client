import React from 'react';

const UploadPhoto = ({label, onChange, image}) => {

    const showImage = image == null ? <i className={'fas fa-camera photo-icon'} />
    : <img src={image} alt="" className={'image-upload'}/>
        console.log(image)
    const showLabel = <div className={'input-label'}>{label}</div>
    return (
        <div className={'input-container'}>
            {showLabel}
        <div className={'photo-container'}>
            <div className={'photo-box'}>
                {showImage}
            </div>
            <input onChange={onChange} type="file" name={'myfile'} style={{position: 'absolute', top: 0, left: 0, fontSize: '10rem', opacity: 0}}/>
        </div>
        </div>
    );
};

export default UploadPhoto;

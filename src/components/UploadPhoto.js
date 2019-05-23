import React from 'react';

const UploadPhoto = ({label}) => {
    return (
        <div className={'input-container'}>
            <div className={'input-label'}>{label}</div>
        <div className={'photo-container'}>
            <div className={'photo-box'}>
                <i className={'fas fa-camera photo-icon'} />
            </div>
            <input type="file" name={'myfile'} style={{position: 'absolute', top: 0, left: 0, fontSize: '10rem', opacity: 0}}/>
        </div>
        </div>
    );
};

export default UploadPhoto;
import React from 'react';
import ButtomAdicionar from "./ButtomAdicionar";

const UploadFile = ({label, onChange}) => {

    return (
        <div className={'upload-file'}>
            <ButtomAdicionar label={label} />
            <input onChange={onChange} type="file" name={'myfile'} style={{position: 'absolute', top: 0, left: 0, fontSize: '10rem', opacity: 0}}/>
        </div>

    );
};

export default UploadFile;

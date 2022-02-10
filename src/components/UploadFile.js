import React, {useState} from 'react';
import ButtomAdicionar from "./ButtomAdicionar";

const UploadFile = React.forwardRef(({label, onChange}, ref) => {

    const [showInput, setShowInput] = useState(true);

    let getInputStyle = () => {
        if (showInput) return {position: 'absolute', top: 0, left: 0, fontSize: '10rem', opacity: 0};
        return {position: 'absolute', top: 0, left: 0, fontSize: '10rem', opacity: 0, pointerEvents: 'none'}
    };

    const contentRender = () => {
        if (showInput) return (
            <ButtomAdicionar label={label}/>
        );
        return <div className={'file-selected'}>
            {ref.current.files[0].name}
            <i className="fas fa-times" onClick={removeFile}/>
        </div>
    };

    const removeFile = () => {
        ref.current.value = '';
        setShowInput(true)
    };

    const handleChange = e => {
        if (ref.current.files[0]) {
            if (onChange) onChange(ref.current.files[0]);
            setShowInput(false)
        }
    };

    return (
        <div className={'upload-file'}>
            {contentRender()}
            <input ref={ref} onChange={handleChange} type="file" name={'myfile'} style={getInputStyle()}/>
        </div>

    );
});

export default UploadFile;

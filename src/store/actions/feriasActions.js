import {MAX_IMAGE_SIZE} from "../../config/defaultValues";
import {reloadImageCache, saveAndReloadWihoutDoMoreAndResetForm,} from "./serverActions";
import * as axios from "axios";

export const uploadDocumentoFeriasAction = (file, value, formName, reload) => dispatch => {
    const type = file.type;
    const reader = new FileReader();
    reader.onload = async e => {
        if (e.target.result.length > MAX_IMAGE_SIZE) {
            return alert('Imagem muito gramde, o tamanho maximo e de 2mb')
        }

        const response = await axios({
            method: 'GET',
            url: `https://wd2f9ukycg.execute-api.us-east-1.amazonaws.com/dev/upload-image?type=${type.replace('/', '---')}`
        });
        const binary = atob(e.target.result.split(',')[1]);
        let array = [];
        for (let i = 0; i < binary.length; i++) {
            array.push(binary.charCodeAt(i))
        }
        const blobData = new Blob([new Uint8Array(array)], {type: 'image/jpeg'});

        const result = await fetch(response.data.uploadURL.split('?')[0], {
            method: 'PUT',
            body: blobData,
        });
        dispatch(saveAndReloadWihoutDoMoreAndResetForm('copia-documentos', {...value, url: result.url}, reload, formName));
        dispatch(reloadImageCache())
    };
    reader.readAsDataURL(file)
};


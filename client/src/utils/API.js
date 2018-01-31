import axios from "axios";
import sha1 from 'sha1';
import superagent from 'superagent';

export default {
    uploadimage: function(query) {
        const UPLOAD_PRESET = 'k01ejdw5';
        const UPLOAD_URL = 'https://api.cloudinary.com/v1_1/noriahjwill/image/upload';

        const timestamp = Date.now()/1000;
        const paramStr = 'timestamp='+timestamp+'&upload_preset='+UPLOAD_PRESET+'VXkPKsEUEdlMYBhPEgWlkukwi4s';

        const signature = sha1(paramStr);

        const params_ = {
            'api_key': '235481835295361',
            'timestamp': timestamp,
            'upload_preset': UPLOAD_PRESET,
            'signature': signature
        };

        let uploadreqeust = superagent.post(UPLOAD_URL);
        uploadreqeust.attach('file', query);

        Object.keys(params_).forEach((key) => {
            uploadreqeust.field(key, params_[key])
        });

        return uploadreqeust;

        // var formData = new FormData();
        // formData.append('file', query);
        // formData.append('upload_preset', UPLOAD_PRESET);
        //
        //
        // return axios.post({
        //     url: UPLOAD_URL,
        //     headers: {
        //         'content-type': 'application/x-www-form-urlencoded'
        //     },
        //     data: formData
        // });
    },

    submitForm: function(query) {
        return axios.post("/questionnaire", query);
    }
};
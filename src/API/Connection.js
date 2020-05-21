import axios from 'axios'

export default axios.create({
    baseURL: `https://api.edamam.com/`
    // headers: {
    //     Authorization:
    //         'app_id  4e9f05eb & app_key 9b904d703fa0d46a88ce1ac63f29f498'
    //     }
}); 
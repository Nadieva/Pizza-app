import axios from 'axios';
import { API_URL } from '../Constants';

class ProductService {

    retrieveProducts(productType) {

        return axios.get(`${API_URL}/${productType}`);
    }
}

export default new ProductService()
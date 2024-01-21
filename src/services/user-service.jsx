import axios from 'axios';

class UserService {

    baseURL = "http://localhost:8080/user";


    signUp(data) {
        return axios.post(this.baseURL + "/registeration", data);
    }

    userLogin(email, password) {
        return axios.get(`${this.baseURL}/login?email=${email}&password=${password}`);
    }
}

export default new UserService;


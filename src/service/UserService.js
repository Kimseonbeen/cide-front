import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/api/user";
class UserService {
    getUsers() {
        return axios.get(USER_API_BASE_URL);
    }
    createUser(User) {
        console.log("service !!!!! createUser : ",User);
        return axios.post(USER_API_BASE_URL, User);
    }
    SelectUserLogin(User) {
        alert("test1");
        return axios.post(USER_API_BASE_URL + "/SelectUserLogin", User);
    }
    
}

export default new UserService();
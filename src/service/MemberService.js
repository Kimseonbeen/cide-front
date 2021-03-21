import axios from 'axios';

const MEMBER_API_BASE_URL = "http://localhost:8080/api/member";
class MemberService {
    getUsers() {
        return axios.get(MEMBER_API_BASE_URL);
    }
    createUser(User) {
        console.log("service !!!!! createUser : ",User);
        return axios.post(MEMBER_API_BASE_URL, User);
    }
    SelectUserLogin(User) {
        console.log("11 : ",MEMBER_API_BASE_URL +"/login2");
        console.log("User : ",User);
        alert("test1 : ");
        return axios.post(MEMBER_API_BASE_URL + "/login2", User);
    }
    
}

export default new MemberService();
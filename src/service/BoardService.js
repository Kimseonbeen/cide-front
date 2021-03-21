import axios from 'axios';

const BOARD_API_BASE_URL = "http://localhost:8080/api/board";
class BoardService {
    getBoards() {
        console.log("getBoards : @@@@@@@@@@@@@");
        return axios.get(BOARD_API_BASE_URL);
    }
    
}

export default new BoardService();
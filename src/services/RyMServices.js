import { API_RM } from "../constants/Api.constants";

class RyMService {
    async getPage(page){
        const response = await fetch(page);
        return response.json();
    }
    async getCharacter(id){
        const response = await fetch(API_RM.CHARACTER_BY_ID(id));
        return response.json();
    }

}
export default new RyMService();
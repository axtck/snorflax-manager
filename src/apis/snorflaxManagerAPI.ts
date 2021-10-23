import axios from "axios";

const devEnv = false;
const snorflaxManagerInstance = axios.create({
    baseURL: devEnv ?
        "http://localhost:3001/api/v1" :
        "http://greensweater-api.io/api/v1"
});

export default snorflaxManagerInstance;

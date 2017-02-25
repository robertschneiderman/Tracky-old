import axios from 'axios';

const ROOT_URL = (process.env.NODE_ENV !== "production") ? 'http://localhost:3090' : 'CHANGEME!!';

// Set config defaults when creating the instance
export var axioss = axios.create({
    baseURL: `${ROOT_URL}`,
    headers: {
        common: {
            'x-auth': localStorage.getItem('token')
        }
    }
});
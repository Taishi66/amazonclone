import axios from "axios";

const instance = axios.create({
    baseUrl: 'http://localhost:5001/amazclone-4d5e8/us-central1/api', //the API url (cloud function)
});

export default instance;
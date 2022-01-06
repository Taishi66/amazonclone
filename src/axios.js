import axios from "axios";

const instance = axios.create({
    baseUrl: '...', //the API url (cloud function)
});

export default instance;
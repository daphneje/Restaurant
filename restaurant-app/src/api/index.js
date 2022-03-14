// Create instance of Axios
// const axios = require('axios');
import axios from "axios";

const API = axios.create({
    baseURL: "https://restaurant-ordering-app.herokuapp.com",
});

// module.exports = API;
export default API;
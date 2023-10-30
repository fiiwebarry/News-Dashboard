/* eslint-disable react-refresh/only-export-components */
import axios from "axios";

export default axios.create({
    baseURL: "https://linesnews.onrender.com/api",
});
import axios from "axios";


export const serverApi = axios.create({
    // baseURL: "http://localhost:3000"
    baseURL: "https://server-typing-game.yugoboy.online"
})
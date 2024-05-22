import axios from "axios";


export const serverApi = axios.create({
    baseURL: "https://server-typing-game.yugoboy.online"
})
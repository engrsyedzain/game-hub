import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c0e1ca1b28bd4798921bd3209880676a'
    }
})

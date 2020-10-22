import axios from 'axios'

const { REACT_APP_API_URL: apiUrl, REACT_APP_API_KEY: apiKey } = process.env

export const getPopular = async() => {
    const { data } = await axios.get(`${apiUrl}/discover/movie?api_key=${apiKey}&page=`)
    return data
}

export const getMovie = async(id) => {
    const { data } = await axios.get(`${apiUrl}/movie/${id}?api_key=${apiKey}&append_to_response=videos,credits,similar`)
    return data
}
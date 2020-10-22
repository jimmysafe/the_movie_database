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

export const getMovieCast = async(id) => {
    const { data } = await axios.get(`${apiUrl}/movie/${id}/credits?api_key=${apiKey}`)
    return data
}

export const getActor = async(id) => {
    const { data } = await axios.get(`${apiUrl}/person/${id}?api_key=${apiKey}&append_to_response=movie_credits`)
    return data
}
import axios from 'axios'

const { REACT_APP_API_URL: apiUrl, REACT_APP_API_KEY: apiKey } = process.env

export const getCategory= async(pageType) => {
    switch(pageType){
        case 'popular':
            const { data: populars } = await axios.get(`${apiUrl}/discover/movie?api_key=${apiKey}&page=`)
            return populars
        case 'top_rated':
            const { data: topRated } = await axios.get(`${apiUrl}/movie/top_rated?api_key=${apiKey}&page=`)
            return topRated
        case 'upcoming':
            const { data: upcomings } = await axios.get(`${apiUrl}/movie/upcoming?api_key=${apiKey}&page=`)
            return upcomings
        default:
            return null;
    }
}

export const getGenre = async(genre_id) => {
    const { data } = await axios.get(`${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=${genre_id}&page=`)
    return data
}

export const getGenresList = async() => {
    const { data } = await axios.get(`${apiUrl}/genre/movie/list?api_key=${apiKey}`)
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

export const getSearch = async(query) => {
    const { data } = await axios.get(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}&page=`)
    return data
}